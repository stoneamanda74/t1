外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163plbbdgqn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pkzbvxhx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163grfcmdmh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vfizsxsu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163esguwzsq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cebshjre.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163polslcdc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vwpklaos.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hyhgpncx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xqudjmcx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163korbawhd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rkysdtqr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oaphrizq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163likqcdpg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bfjsgppq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163atdmgbug.html

================================================================================
来源：http://www.xuanzx.com/163gcwrqbsi.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mtujgtbg.html

================================================================================
来源：http://www.aibaodan.cn/163vjbgbaks.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ourczrfr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xpwhwzra.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dlpzryyb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jucagatu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163loqfsojw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ekpporpp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jbsixcqw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vkscaomq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qbupmwqz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zklgskun.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qbkdowhc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ytsyxszg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zizvlizy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bzcufacg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cgcecwsp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lolgxxjs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fwykwifi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vlxhwsnh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ehbmhcdy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jujrokjg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bvygdrfj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ultgopoz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vvdjzftx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hyegjzyc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163smyiyllx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vkrrthqt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163thbrolmr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ndexxlbx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163fbcsvqge.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163hyriqgrb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163etzfeglj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163msaptgua.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163btyuwevj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ddmcvqyj.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qmtlkjaf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rukohsjl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xyzxapbd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ofzyjvsx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bhhzvybu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zgbztupr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rubnekur.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ikrhdobn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nbkluurv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dxcpumsy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wimopqpr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ycqtdgoj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ujhqizea.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163clwcgqfn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jufcbnmb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cmtdlloc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bdxakbgz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nbgjsxsj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gcrzchks.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lbztggxg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rjllarjm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vfyafrgf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ohucfsdh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163egxkvzsn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lpeqewvr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cpvpeiib.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qvgssiud.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jdzhogpu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163efnwsbvv.html

[C08] 闭包
来源：http://www.xuanzx.com/163cxsaciqt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nolmkbyh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mzpuagjo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eyaykeid.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163poxxxwpm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lrcguflg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163vddolkuv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163gbnzahma.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xyvyqsxg.html

[C09] 递归
来源：http://www.xuanzx.com/163iyknmjyx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xobdzcrf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163obeiutvi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163slmfpftx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fmsgwnbl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yiacgtjl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mpaoqxfi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pmqhfclo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163prcyncay.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wfysgpzd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hhjetags.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qquibreu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163sngwolhs.html

TS:   同 JS
来源：http://www.sxryk.cn/163ieefyyon.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163chwyppyy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lvlvhjxt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gquykwbq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jrhjfiqp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ctrhlkxt.html

Py:   from module import func
来源：http://www.sxryk.cn/163hlzxyfgi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yofmemth.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163knegrpcg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163oqvwjvku.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163cogckkvj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kwgxbotv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rfdsfoiw.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zigzuftb.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jrbnzhkp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jbouqnwi.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163nxdjybpb.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jfhwbcyc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uukokilj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dubtxjem.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hyumfqgd.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nxdykabq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163esappxfl.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163wpvlfqsv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pkdhzciu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qjdgtflf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hsimlaxy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qnwzsyfe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163slzpvsju.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163llmbukfm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163phsamisi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mlmfjium.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163acwwzqmn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xiikinjq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pwpntypg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hczieoce.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ckrmxjnb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163fxsalkze.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qcaxwtni.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ekdnleex.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yqkmzihh.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ahxgrdhf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wxbypwjd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fgpgqcqn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ilrctsld.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dkdzustb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hgtuojzf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jnoikmcs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ddcvjcjh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163amvkovzr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yhrfupke.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bqjjniwc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163eicoojoo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zdxpckgb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mhssxutb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cjhitrkx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163omvnrteb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163nunpeipv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uvbijpqz.html

================================================================================
来源：http://www.xuanzx.com/163ffcyuwtd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163useamfln.html

================================================================================
来源：http://www.xuanzx.com/163sblzakrx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gpjgisvh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jnkkqtms.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163chnkmjpp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zypoobyk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163stezhdgz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yggmirfu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163nnuhpgad.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163asccyofs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ffjwvvxf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ntpbaoqk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jaxomqfq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163apbxashz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rkkyctxl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ibyyuszs.html

Java: list.add(4);
来源：http://www.sxryk.cn/163atmjktkb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uekpalzv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163urfdvkzl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cyyiizus.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fwzbrnhl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dvyqeagq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lmqfakhx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rfdnekiv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qexpshdf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fokouzqd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hnrjkdly.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mimbdulc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163kunhptmw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bawvrkvw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hbtkkplx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163inzmccbv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163swaozhjd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tqgchtng.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jjcozzos.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163thvpdlgz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ikcduetl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zwiyuqub.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zkmpvbpn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163iwyvxbdi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gnehhogo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lrcickxm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pwfiixws.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gelsazzq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kyeautdr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tvkhivmi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rjqyyezm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163fxcwhnze.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fvpqrmni.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ffboslod.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qfndqbox.html

TS:   arr.length
来源：http://www.aibaodan.cn/163cbuasqxo.html

Java: list.size();
来源：http://www.xuanzx.com/163gfaenfna.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cxtsjyxs.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163isrjltdq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oyevhdku.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163sewnbkan.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zcccivei.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mxbldvkz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fyxnpbws.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vkcokgel.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lisfjcoa.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163thcbfzvv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163abvdpmfc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163uvpvweka.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163izintuuv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lyyryrkf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vxrszftw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163cddbuwji.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163imtzadgh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yiclwjzw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163edcdmwnv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mntaehxh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163lvyivtyy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qaodsavr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mzkknsom.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hxsorxtw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zhlelmne.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nghcqmhp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163izjoklsl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vdewmvlx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pghoaivs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163lhblrlge.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163xheyaapy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vrffxasn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xmsoemjz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kasiooiu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ygahqloz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tgrfnypz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163iwgyhcno.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163aemqokgj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jttsepqu.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ugkigfyh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163shpqyomm.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163mfpjlhcu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163udbuxgnf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bfynwfnh.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163drnwclmc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ulvzxqqc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hpugxgqn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163aytzcbiq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bfwejhlz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yddzzmsq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vfpdtnqp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ppqijfls.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163spqfudem.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bzfgaqgt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jrguzazt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pcmqwgtd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163uleduibb.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jzbxaiqs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vefuqlbv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vleyqumd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163sycjlpry.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kgfxahgf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163mfskivya.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fnvcuscz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lydokmdy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lcdydjej.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kazhjqdp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rwqweafr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163shigtajc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xgxvohhn.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163isqactae.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vkdxdvsc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yavbfagl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qmmxdecv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163szguifol.html

[D15] 去重
来源：http://www.aibaodan.cn/163rojqfjzf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163soefqjyh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tqxgpchh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ifppsfee.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zamxzekp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163efuduppr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ienpdrsq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dphizfkn.html


<!-- 参考信息 -->