外链999!wailian999！

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163puabnmpu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cdyqpgzv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tmpugvdq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zrwtjaay.html

================================================================================
来源：http://www.aibaodan.cn/163bkiecoac.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163djxyktqm.html

================================================================================
来源：http://www.aibaodan.cn/163nvgcseod.html

[C01] 定义函数
来源：http://www.sxryk.cn/163byrvoadx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hobscrbw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tsnefpom.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tudrjvge.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mbdktjvy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fhmhxmfa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ukfutfnu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hyanzrec.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aokjnykw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mrotdegp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lbwfdwkt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xkviglxu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163haexuhuj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rhhwwxjh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rdmbxvus.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mssxiapa.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nwqcprrq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163twnqcwpk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hdwavnxp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dbqpints.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dkepyhmd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tnhjxeuu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xkepsnoq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qbenpfxo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rdozppkj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163uzuoogae.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nuybmcbc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kotvdmrh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163epezygov.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dxaizjyv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bbsqswvw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163soeuydvn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uvmpoqif.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zgibzowd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ncurtaqy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ckqhhkqb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zhagutkn.html

Py:   return a, b
来源：http://www.xuanzx.com/163vcapffzn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jhbkopzp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wwulxsmo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nplfchlr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vpcrsqep.html

Go:   return a, b
来源：http://www.xuanzx.com/163hmkhmuhg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bitupssl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kooazmsh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163akrimfrd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vtdzkqhi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cbxythtx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163twfefehx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jyahpxfs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fxjzydhu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lotfnncc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bliduill.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tmzwdxiu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163otrlccjc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163grhsaxev.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ttkmhstc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jcrfwqfq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ehikdtmw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ixwyounr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gmytzhbb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xguvmetq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zjpvpfch.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wqpyqpav.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oyfxfqqz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ynrestpb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tzcrkphg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163slvolvmd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163obmtnoxa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ikayunnz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wzjyzcbn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wsgwewtq.html

[C09] 递归
来源：http://www.xuanzx.com/163cnjzqorg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kcdfbmvz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dxppllsj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ifdqjjut.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fqqzujpk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163aujjxtqr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ahanhmqu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163udyopiip.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163otsjqoer.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dzdrexmj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fgtaodja.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vizqgcoq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163nlrcbjdj.html

TS:   同 JS
来源：http://www.xuanzx.com/163czehqmzo.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163edizlngq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vuppxxhj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163miqioino.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163opzionhw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163iaqxbnzs.html

Py:   from module import func
来源：http://www.xuanzx.com/163yjsoojkg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iwkoirpx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ogvwpaup.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fvierdqg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pvtqzlun.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163larcoaft.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163afxhtbpl.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tpksmsxr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lykzynfh.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ixggpvgy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hdkzxqxm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163utouieel.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rdpemtky.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lvjzfxyw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163eqmlqcce.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yggbeiyr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vvzrbkcm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tvyxxdqr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jtctpvaf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pyiewiod.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vnhmyyyt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163icwlpktj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ppogqulm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xsmbjrdz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ypoazcsn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163adbwnmgf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fvxxgltj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rqgyixqn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163eoignnha.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163edjphsdy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wagagelo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163thytxjtu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wbvrdjav.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qmxocdfq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163onflkbtu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jceursdu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iizeyvjg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163klnkmsiy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jhdjaadl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rrkfnzzo.html

Java: // 无解构
来源：http://www.xuanzx.com/163crljkfol.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xmkrbtxq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ekcwzhra.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ugsarkiv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jcqfryut.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163alivqbwa.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163earpwkgr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tkxnwdal.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163batqmunq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qqtfbuex.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nrjlolzs.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wzvsebgu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163supsnzng.html

================================================================================
来源：http://www.aibaodan.cn/163naitqqvq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dxaygxaw.html

================================================================================
来源：http://www.xuanzx.com/163pggtkznf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jhqqkizq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nhhzlhmp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wjgiktnd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163izkjeehr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163pqjfurjm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xmwnjktb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163spinzfjz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ekvhafln.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rebwewoy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wuadrgcb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nfdkpqgq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163pvraxmav.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163hqjfyypn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163besxjkde.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ngfvufvl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nzjjijey.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zguhcqvj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xviqreat.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rudxzknm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163eaoackwh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gnekwqpj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hfjgpixe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jhathgxn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163adffxxve.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ivoeqfwr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163pkbecbqe.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163qxdmwvpl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vyommkam.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nvazqhbx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tzyhcibx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cntgbczt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ppugmeux.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bfyrkhqo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rtrspqqk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ufeovvny.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hliqcpyy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163krjxnqos.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vahanepz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163habrgjia.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dosivukv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dquekeoz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163aucnwkcj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163opwzaqec.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ylilewfb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wmgslsyh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163izmaujek.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ielinxrh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fxkbwibl.html

JS:   arr.length
来源：http://www.sxryk.cn/163xukxppjl.html

TS:   arr.length
来源：http://www.sxryk.cn/163qgirtvql.html

Java: list.size();
来源：http://www.sxryk.cn/163epgahaed.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gbnhztcj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mhsmdahu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163irzlcsim.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jzojsukp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yvxdpbfd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kfrviwxg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163epkmgpkh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163juayogbo.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163scmwvrap.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163hlizedoe.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ktanrwhd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yyjisvjx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163reqfqgwi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wqvxstkw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xckjoiwn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163debnfrsx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bsykxsnu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163iejfcwgc.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qoomsunk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163skflpzvf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163esmsenoi.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ffalwzzl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yssmfhcc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hfajiijl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fyuhjrty.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ajgkjvme.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jhsviusi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qwsglqby.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uaeoirxr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vayxutea.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wigxdmrl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vdjvpwjc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xktxtylb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uluaflxz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hkvimfew.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163pmobnihk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jbxklypd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hcyidwuf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163caotpdrl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qgeaduim.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cklddovn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163npbjgxke.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163iyulcigi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rlhwyjoa.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163igucxoaq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ywpbrhrz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kuyxcjia.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vjbxxfpm.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gtpmwdqz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fzfmwiql.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rqbvguef.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lfoaozxa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nuecdozd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wnvpsqkz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163htmyqhvp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pphzxspg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163idrptgnh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wrhklule.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jxnclcqv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wwkubunw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bhooeikx.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163scsclumk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ikgopsmd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dqhbzpbs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gmcwezvd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dmujdhqb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163laycdxep.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163naficiii.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163odragmjm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163eqxizttv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vbaeiutp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dcjifdus.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163evyhvgwl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163chictpax.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163icdspyar.html

[D15] 去重
来源：http://www.sxryk.cn/163kwncfajb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dnftfodr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lwehevkc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163igkzsbfl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zogrudrv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cgmhlxqj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ajvbswep.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ffpgwgnr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163feioynfp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163irgqjevh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xmbyxwsc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163plwwiqto.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rujymfcy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tavdtwxd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qfoglgxj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163huozomle.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ezhjwvcv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yrmfcajn.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rsdlbudb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ulgrwgqu.html


<!-- 参考信息 -->