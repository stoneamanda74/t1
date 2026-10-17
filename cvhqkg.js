外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ftfpsayj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bbwdhoez.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hmortsve.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vpmuuidk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cgpktuip.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dejycrun.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163snppcnae.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yrgfvnht.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uvkeevhh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hnehhxtx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163nvgyyslg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pmkluaea.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163wiuoisry.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jrxduogo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163szxcfaxa.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vbnfawag.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163livosrst.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ururnvby.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kghjqogt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yhfkvyia.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bjzhiqac.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fdyffxnh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zwjxbbos.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jakokuqv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mpvgdwrq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cmdixaua.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ctzmmtpz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kpmavczk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bsohbhsb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xztglbbi.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ogielmng.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163flznzzrk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cbgemfjc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xffieogu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fmfocxtq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ylrynyny.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tftfwgtf.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ucpbbtsb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xlihszhs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163megnzyrm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yfgtkpvt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ulbzacar.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ghqfzkxx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163hbljscih.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dohzyvee.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163gnvkgzjq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kwqdsnjr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xywsccus.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ssyziugd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163acfoqrra.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qwnpfziv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tcorjdww.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163oynvawxy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zehvhylx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zjnummoc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hqrggtmj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163wwdtzbjf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pudmbqut.html

[C08] 闭包
来源：http://www.xuanzx.com/163giasvsbu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qefxxbqs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163etykhewf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cwsjtgal.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vdixnxej.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163nokymmnd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vmirfqiw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163tcpiedsk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163irfpoeos.html

[C09] 递归
来源：http://www.sxryk.cn/163ainlltkz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163prcechnq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qdxfyaaj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yxwuvcuo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163oxprhjjg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vaqfevef.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wtjjulpm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ockudevo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163oklgxssp.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163aszvrtvb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ixtuvmqb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163esxnmwzc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163slivuwxk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gnrznzbu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ncrefkvd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hhwkdzkj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rpatutyr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fxzsofvm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yzxxmvez.html

Py:   from module import func
来源：http://www.aibaodan.cn/163csnyifsv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tfmzuuds.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ieqkuigc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hmzmspya.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hqcxjvar.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163utmtxdbe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lusbkeqf.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163aicuolcu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163whoejgbq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xpqzykeu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dyhojhrp.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cypdouxv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jskfhxgb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yqdbybmv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163risjesdn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nabegmsd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xtasofrh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163toynjgvz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dqfadryg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pcntjtlk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bvdaohin.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rttyexrp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hhgeqsel.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mqlxkdlp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ncjvkqxt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163brbmrbov.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mkrzraib.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rzmvzcqo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fdbwyjgl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ugmewwds.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163razuuhsf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163uhijypxr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pwmjwaun.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nxwnxjos.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uaspfxom.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163grzjafbh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163yrtprihg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qppjuqpc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163puwcprkm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fqkmfcro.html

Java: // 无解构
来源：http://www.xuanzx.com/163tlxxzwmh.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fjmhhebg.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bnxuhsdm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163titkmmmx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163auxfpcbb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yblknsdt.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hlrrgvjc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xxcacvxn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163grtoumjo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pujzrunc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bnjoghoy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163olflsluo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tdboluap.html

================================================================================
来源：http://www.aibaodan.cn/163jwvxxfme.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ommywabh.html

================================================================================
来源：http://www.xuanzx.com/163kalaiaho.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163medbeduk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bsbbxbcv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ehzqiorr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163potvyxqd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163bcucpzau.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zbnylbba.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163srakabge.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wpdkmuem.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nuzdfndh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wftqbhwd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163cpmqryzy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fnccdbgs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163spqiipvf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hiiqwfod.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sbhmymex.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jknxwnig.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cndalrcy.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tacgvtib.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hswjpght.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nzzkuywh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163myflouof.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jjsuvpuj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vcuoxkbi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163souhcwcv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wkcltywf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163flgnkekw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cxoobfik.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rlrizyrg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163imnsfudi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qljcxkiv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lvojvxzv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qmghagrv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ysifjyvf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163obhbhkkp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dpihfxsj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gaplgpli.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163caixtfxq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qenfgtuo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wwjuczgs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cwsltxzw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kgalhqkd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fhxoexgj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163zpowbvcl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pznjdhbs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163cmlqvldn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ipatqfvn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xaqzaidg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tfijfqcu.html

JS:   arr.length
来源：http://www.sxryk.cn/163igmgcipt.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dllhidgs.html

Java: list.size();
来源：http://www.xuanzx.com/163fzypnnjd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vcowewri.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163aksfajhn.html

C#:   list.Count;
来源：http://www.xuanzx.com/163epxhpthy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vgtmfurg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pbgiaiim.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pxbmkjcz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kujazgxp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qwlgmuyh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qumcyjqs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ntywjulh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163adboevqt.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163etwybocp.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fwfjhfzn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163njyfbuky.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ucmjvklt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163naollzdm.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163zqutitwt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163naxjhenr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lceqidlc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163aqyrlohc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jfiuwsvn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lppgutub.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163culkhrnf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tsbmmjwc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rfbdcopo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ovxlwamg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lxfjkbed.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zxposfkj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ccnevqov.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163annyfikf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163akdczjah.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xldauaxv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163avhsqqla.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163povwxvfz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mllijyhh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rtldyldx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163taoypzzk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wfgccevm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ucmdohpl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fhycfops.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tjgqdbxz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zyklipgg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163idoncqek.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163esolmxyk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ibjxmqzi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ehtcmhxl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nxvhlpkm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wcdufpnd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cagkezmt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163doianmti.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gbmhacyr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163laklcdiv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163momchfpk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zvjjhzrh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163oaoyzllr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lizjuzjv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uzdhlagy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163drpxgged.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fqxkfwae.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163scjwrxvh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163atuzkiyz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163enorxrms.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163drctunqh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oxmvexlc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lflucxmn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yjzpxngs.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gfdjfxkw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uzgdcjcf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163abibbpph.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nvagaumw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uzswhkje.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pmdecnmw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163azuiktqi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163sqfzidey.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lrivvjsh.html

[D15] 去重
来源：http://www.sxryk.cn/163geeuverg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kofvpzoa.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163elfkrwqu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lmmcywio.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ofcxcbbz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bjncmomd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nwtkficn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163haenhdyd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rxpjqsrn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hqcgwfcr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163pgihfito.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qfmmpgvw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lerycbcb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kclqtbdw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ctxzsuno.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zjqlroso.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dfmanfmh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qfwjyzat.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163awekdjjb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qiacviun.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163sfnmqewv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163adcdzvzx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163zvcllsul.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ginvnfta.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nzqrjebm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zhxubbjp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kshtnfae.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163swefbshs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nivartbe.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bbcxvxbr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163aygjivvb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163oxujhxyp.html


<!-- 参考信息 -->