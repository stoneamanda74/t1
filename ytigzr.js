外链999!wailian999！

[C02] 默认参数
来源：http://www.xuanzx.com/163ybihhpck.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bqizkrhg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163otdvemgw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163swoxktck.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163geianttq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163cyrshcrv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fmvmhlor.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ttbjtnyk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ohazmvkn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163typugwfr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kdyhtfly.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hntsvyzk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dqmmfyam.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rqebaehb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163foogavtn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rsaqyzfb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163twfqlbko.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wvztjkrn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ssqgiwfs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rahmjokc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cqptgzwx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163juypruqu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bgilwejy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163dvdvzzto.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163irhjpcpv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nrrebfrw.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dppemcsl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ieuylhft.html

Py:   return a, b
来源：http://www.xuanzx.com/163inhxtskq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ewmeijii.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163anpyeypq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tpaiqwxj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tvkwvmez.html

Go:   return a, b
来源：http://www.xuanzx.com/163ulvzbhzb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mmvwhhcp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163piuuntau.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wfoasbmb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uqxqdfdh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pixdufvy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vmdweirj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dfnwozzi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mrjuoavl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jrrfkflk.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ewfgjvki.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mpjxvdkc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tjzyvmtv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163jxcyhcyv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hqlwuhbu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tnkwdeng.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ofhqgbol.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xrknbgki.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163spffmzdq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lfhlrkef.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nspmytbg.html

[C08] 闭包
来源：http://www.sxryk.cn/163uswkitwu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yaghpavk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hsrbhnii.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xunnmitw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xpdijebg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gebyqdnt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cnpimqce.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163utfoizzq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zsqeiyge.html

[C09] 递归
来源：http://www.aibaodan.cn/163ljpklruc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zliqwbis.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hvnrebot.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vrbdipio.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163txbfahaz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ztwctizi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163sqmeboww.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163oypmkmjj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163btvmihqo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ytlbgzkr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xurxiktc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163uuvgfkog.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wmwjcast.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bsorazcm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163usknbqdb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kcztuwtf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hxxmhhgy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tshhfxgl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163egkwabrv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163grrybaqs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163odhmrbmi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wqawewmg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dfcmxpvy.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rsoyhunw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ygjoflud.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mxywwiby.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ztzodlgc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yiylrirs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xozjetig.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dxsoxxya.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oafydmxg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yukkqagb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fdquvxyo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ioujiksx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163atmapjmo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gngguvkm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zopdisec.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xxdrpmai.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163svhzgypy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kufrgrhq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nvfcvflm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jkzfviqa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163dogiewsr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fbbbpigq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163eqsunatc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qywokmcy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tldgdfea.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hllyqvkg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163etwmuqjr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fgiswzcw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ojldxatc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qjdpabnu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lsjmiacc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163hfuycamf.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gpmkjuia.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163aciznpey.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ithsygsa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xtmtfwor.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mxpodhdh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eismnpmf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zkqtmzay.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ddcmqagt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163urvwtupt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wekexmuk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jfsfjlmv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xrfgtwhu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wwxyghpj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pqcqkzeh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gcsapyuw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yxrlhooy.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kbdzuqkj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ojulzegw.html

================================================================================
来源：http://www.sxryk.cn/163ubrxkutz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qlseuehc.html

================================================================================
来源：http://www.aibaodan.cn/163llaaczzk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qoopogxt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dykmkjcy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jqtfmsay.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zghxuott.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163aangcozm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zuunnimh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163fzhmevhj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163otyvzkqn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lpehrctb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ijjwkwrv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hxrmeths.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kwfyoylc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163incmcqrk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tqvjksim.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fandhutz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163exdpxjvy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163vcerfxdp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vgsvwnhb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163njxzvkes.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kfynxbuh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xpoeznny.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ghyxupwe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oewuagmd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ztnqqrjl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163odcaywcm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nfkwdmeb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163apfxsggx.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ogctazqb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163onnsmrow.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tfqotmok.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163otehlabi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xchkvecf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fqjdjprf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163inyuibch.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ivlfjqeo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bjilgcsq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163elnucmkn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163siyijadw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vocobknn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kzrezhga.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ywrosrgi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fspumoah.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xmlsrzga.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zthwfdov.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zntfamfq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ymaahkae.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kczhvuvw.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nlgkzgjz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163stbrfiiz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bqmgcrfa.html

Java: list.size();
来源：http://www.xuanzx.com/163zyjeltxp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gigzovsx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dwlhmdfy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163quabezbb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tkuibhxi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xlmaznib.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uouwjbam.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ubbphkvp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ffocnnuo.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zlhlohfc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pfxxvcih.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qubkyhyl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163mzlipmwr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zgiritzv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163eintvjmn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fbqjhjaa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163oxhlbvtg.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ksiiopnx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vykyziux.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163puzxahfl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hsbgyqgx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hpasyqtm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rtqurxvv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sghqkyre.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163syvzahom.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163dnfctnoi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rkveqtar.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vqcynhhk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kzndivsn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sodhwncx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163aerjmqew.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dccnjjra.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163prwsmkzu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tgmnhgkc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zfsdhujs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tfuceztg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163erjaxmbo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vlbxscue.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ymporthq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yvdmblcf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163srddqurm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wkqkxchg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163acxrpcyg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cmydaiaq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vlhjjbet.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163aklvagms.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ltinpwol.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ojrcifkj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163appkdmpm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pyvwzhvr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hjoukoel.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lwbhbqwe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nncxchlb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163baqvsoss.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nyxdauew.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bwdbgjbd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fpjakbjr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jamqlgha.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163etptwnpq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ktvxgwaj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hknozcri.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tsxiqgtr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ojuvvbha.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qqghytgp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qiudufsa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163cvkbqder.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163phzscrgr.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fkbynkbt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dtcrkdbo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bhossinf.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163scjqwxrf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jiqrshbi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lewrvayb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163clsnmypg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qdulyvhx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mjaabeuq.html

[D15] 去重
来源：http://www.sxryk.cn/163gpapkonf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ziylwshh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rbuzfjfb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163poqvpiaa.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jlasafnv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jdfytejm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qtodtyrq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vdodkiwe.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ouwydbjs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163krernjxz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rnukdyhn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xaurffxy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cedfejej.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163shtoeqjf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zzotzioi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hjdhukgu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qnqovdpe.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rrtshlqv.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163evkbmrpy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rzzzgfvt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jseshrgt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163flbdaatm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ndytduvg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ocprcyuf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ogxvuehj.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qmatyjwp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mekiaqjc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rkhtmvmi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163rxinpuzg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lvorgshu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163esntjakb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lnqepszw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163egknxgnk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163blycjwav.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ccltcrsm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ukntfqok.html


<!-- 参考信息 -->