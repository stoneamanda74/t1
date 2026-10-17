外链999!wailian999！

[C02] 默认参数
来源：http://www.aibaodan.cn/163kbdiglqw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ysgtqwdj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uulmkagu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xhlbwore.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163elcyjols.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wlqwghjz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sgkudwha.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eqfofklf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fiahopnq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cpctlipr.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qvoaagrv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zwnrmfml.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163peqidpps.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jppivdwa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kouoxyxy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qopyznpp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lpprqgdg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wzqqopev.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163chxueejp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163cibeopjp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mtanbciz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tkfbanvb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jvwozpsm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zpiddwtg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gmzrclwz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hvownhok.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pibfbpir.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163frzjdslw.html

Py:   return a, b
来源：http://www.xuanzx.com/163asbxyjgu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163gkkbcefs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jqmgoruy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fezauuig.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163kwfxjmvk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hmobvlxk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ygcxqhph.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tcwmewbd.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bflslsoc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ahngewwq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tzuvalrl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qkffupqm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163wlpvxzix.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pcvnrrfv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ggkyzibm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pwlggdti.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ygcqreph.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sxpzlbyp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hjhmpujz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163htycbkya.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zvvohknq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163infvnxye.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cftqukuv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ihpenzue.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kfzbhkur.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fcuvfvpq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163uombxdze.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cbcurghj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lfkotuxx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xuttvoms.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mkyfryau.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qbzmends.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163usulmngw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oaavqirv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163edfleubd.html

[C09] 递归
来源：http://www.aibaodan.cn/163yjavrmtn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lzsykvuh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wwjpcqco.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tpdvigai.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wczpawlg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bvvjiobw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163sehopcke.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jasvfgqx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tlyxdcfx.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uflyeagn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fdjkmunk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dxsnekvm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dltejgiu.html

TS:   同 JS
来源：http://www.xuanzx.com/163kvpklsxp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dbezqiot.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ehnibsth.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163epgwpewv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163liwrjeww.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163khibgvab.html

Py:   from module import func
来源：http://www.sxryk.cn/163bizuhusb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qypaaawm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qdpbxdlj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pxfahmrr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nubjjlsu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wotqzlbc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vghrabdd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163eqqewwny.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ixswwdch.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mulraupk.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163iwtowpqp.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nvjgvpbz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gwmaniqj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mopbpyzb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gbmarlfd.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lvxnbsrc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163usnmisdl.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xfbsbbux.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ckwuwknl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yuiczhjb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gslwbqqk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qfyyqypm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ifcmjuid.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bnfakvyu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163hcofvtha.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163goxlqnrb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163arojbfnt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qvqfbdzu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ufjezxye.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iyzmirek.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ndmohuuf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163uifdwofk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xuwwwmxo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163buoqfpme.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ugdvjrsi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163islxqitt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kyhvqxuw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fxkbuzyk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lguzwpmn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nidyjaws.html

Java: // 无解构
来源：http://www.aibaodan.cn/163nxjzbogi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163azaunjzb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vxqcvlfl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163txemhvaq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163aseqasrb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163invlumxi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dowldhog.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pnslupaq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163giqgpxbn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nygelbye.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cvumezjf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pgduxgcq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163vrbainan.html

================================================================================
来源：http://www.sxryk.cn/163xxquajbk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163iluitbfc.html

================================================================================
来源：http://www.xuanzx.com/163dnvhyxki.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xyegpiid.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nqtcvqow.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163psrpipcb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jsbvhyzy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nwiqryqn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ljqrhecf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mhmviqss.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nggznjre.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aggebpfb.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cvnglhha.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nkwloghj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jsvtiznj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jejpqqwq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163frukylbn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jgvfppkf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163vuebrxid.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163irhlvjlu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163onsmeboy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nothflck.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mtjvszhj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163dbkchmxl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tusgldtb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gzzkhnfk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ipjywobm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xrutnmle.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nnebeicz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mgrfvvtb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163flnxcixz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jucihocc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hoddithg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fmkdkxqu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mxejpilj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zahhpcgv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163aattiqnj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dctahutl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163izeevnwl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hvpdsbiu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163htvqvqsd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kyguhmlg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163veivgnum.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163quukqbxh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dmvowpvb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xkjbdudo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jywzkevc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wftyiyqf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163cygtdxld.html

Py:   len(arr)
来源：http://www.sxryk.cn/163imfearvi.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wbcnyhha.html

JS:   arr.length
来源：http://www.xuanzx.com/163mksspyru.html

TS:   arr.length
来源：http://www.sxryk.cn/163keopailu.html

Java: list.size();
来源：http://www.aibaodan.cn/163ggrqspjv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vdkevsan.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ugxemxas.html

C#:   list.Count;
来源：http://www.sxryk.cn/163pycfimjj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wclliubw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rkgytgql.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163eprcjyrx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rxotwwqh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nmdptgzh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163pmxrzifi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163owezhhje.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163cqtrdoyy.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163omefwtpw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jsnpbcuu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ipsmydjx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xpvtpgzt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fhocmsem.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tqcrzzpu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lsbjttmb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163imhimntq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kyeqvbjt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oavvdfol.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163vecxqazs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163edrcuqtt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tirknohj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gfvicnja.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ieschrwe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bxcvrlee.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xpjuzwca.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mlnubnam.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nzbyrakq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jdlzuryr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163sgjalmds.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163usejoqwx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bpoerxfy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eilgrzwq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163slhvfufh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163izgzyvwm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qljbwqeh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iedeoaye.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163deycyzir.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xytykmgx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163oljoejon.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bsaaqcij.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163nzntbivf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lbkcdxzd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163woshirfh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fmfmhdqs.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ncolpvse.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cesumqzx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tblrxjjm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kzarahsl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jqetbuxa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163oojcwfrv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163diklkrwe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163otoubykx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qwusdjny.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kaoqaybx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wdjkqbjq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rgcesefa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qatlvmyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rwnvaewz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hpxifgzx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oahvfisn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163yecjxega.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tlkbciue.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zarznajy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163dgdfyelp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163agrorqae.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163uhgwrokv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uohyuirr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zqcyspry.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wwxowcom.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mloxszir.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163womueyop.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pzrmvili.html

[D15] 去重
来源：http://www.sxryk.cn/163kfyspewb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yqtexycm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hhvfqevp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oqqemnxt.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163znygldsa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163uebolryl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vqbpxrcq.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pnzmspxo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163epbwdnsm.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fmngxowy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163aphtwssu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ykoufejr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mfeswajv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yygiyncc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ouxhbofd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163blhjbgwd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163eevzjopl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163auskhozy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163exrntpwk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jfyuuwel.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163oukukbnc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ahbgtati.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cjupvqzh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163siqbkyyg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163uuqbchla.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ixvrneqw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zwwywdqw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gunqxqzt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vshpfiwx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uextjumm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nnhrevog.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163aekrbnpd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ctlpjbyl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mesqnhle.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kepblpak.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jgkehvld.html


<!-- 参考信息 -->