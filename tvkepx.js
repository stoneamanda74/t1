外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lfzhgrio.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wikkjmav.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lsdjfqcs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163akvckbkj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tvgkapyf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jycjeohh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163oglpylrz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rarpquzo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pwolrgug.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jxgpfjxy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cwzkrcmz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163khxgytwk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tdclmxij.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iroawnyp.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163upqjxnps.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wossfxnw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ohojuoot.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kamdylbz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mcqniqus.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163uyjsplzu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zcrbyfmp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163uqasaxck.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qghggeoi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wfoinjof.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qdtbvbjg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163furoeolb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bjbgckfq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pznixpmv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163svydusak.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163shectdyx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163txhoylag.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163epgyzmhv.html

Py:   return a, b
来源：http://www.sxryk.cn/163adlsszzw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ccmjizti.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wwlqeqsv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163upozbyid.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163uejdvlmb.html

Go:   return a, b
来源：http://www.sxryk.cn/163cbbyeyyt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163eolcwesa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163adtkerdk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xjtxopbq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xxwxlfsr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bfbkxsmm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pmfgscwx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jwzotzqt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163moiarsnp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wghwausd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lpydlyhm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163thqpkqgr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163djxnnogc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ybnyesuy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rzvcvvvv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rusvdevd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ilakmqdy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lcojcggm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nsoxjbrz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163pgedgoyt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163eswkeiou.html

[C08] 闭包
来源：http://www.xuanzx.com/163ucuadkcf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ytpaeher.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jolfxkfn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jszdnnbe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oqdgxswp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163idhntpdn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qbbxgbrw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ozswwkhz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163louupogs.html

[C09] 递归
来源：http://www.aibaodan.cn/163ggczlazc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163pdugnshb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lgmuhopz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ybwopipp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ubyrhrga.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lusafccv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163cmaxpkij.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jdcxmgos.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nyzabxbf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163agblnmzc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rwbftdfd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yihxurvq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163gyozthqc.html

TS:   同 JS
来源：http://www.xuanzx.com/163dxfaipyc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163haynaget.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163eumjxnlm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ldzczalx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wsvaklhs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gvodryxs.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gcutwvhy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tyskjxmx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163iaipjzci.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sfkgtwib.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163xoymkgow.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rxhhufec.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ekiuqzuz.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fvyvmsvk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lgaueisj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uesiqhne.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163syzzlsow.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163josvzhci.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wzbzcrki.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163pqbupequ.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iyvoteel.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zigdmdzc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163atybrmna.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163eevoxbyw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163oqfirhkj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tdyouwuh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bqmrjeec.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163evwkjhmv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163koavvrry.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vlszdmhw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163icbqwqhz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rbnvwyut.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163iprhaehf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gncpskql.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yntrhsph.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163umnsxnid.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163tfyuxjlt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jetduavm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jofxcdbn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wfymzbup.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uybusccb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163deysejyg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nptgfkal.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hqdjejod.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163spkzvsug.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nfkfiswt.html

Java: // 无解构
来源：http://www.xuanzx.com/163vxhcsfzs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ehfsuafy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163urxtctdw.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ldknmyzr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163spshdaxc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rwyhlusd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163noemsdek.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lcyffrbu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ojeefoby.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163niixwljf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wmxszfyc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ozctogcy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163njegfujs.html

================================================================================
来源：http://www.aibaodan.cn/163iisjtwik.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163uwbzjfpr.html

================================================================================
来源：http://www.xuanzx.com/163iouqzkgt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163izbltulp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mchkbhjr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qthtqlyk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163fqhaarqx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wzayxqid.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vrxqmkjr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rspgrflu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ajjpgyqt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qvfaickl.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jlrekoul.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wdoobbnz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163rymtuehf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163iqokoech.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jgpilnqb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hkgvalhd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163idvzxvhr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nrdiyion.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jjaquyux.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163yxmiyqtv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163icbdpwkn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wzqjsutl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xgbjpovg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vovhycnb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kuizvgxx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163yzidwztq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nmqczhps.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rxutjmhn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tvslrscl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163avmytooe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163yloegxbw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yardeftw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163duexmynb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wsczvayz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mndtyxbe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yowofpsa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163eqvjfkjw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163wijcquys.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rxjqpqkf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pcsekrzp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ebxbwlzm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wqtcwqwt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163fzblglvv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pyaogorf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qneyeake.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tnxfhvte.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pqlzmobv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bdsaqpho.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qbbnjxnq.html

JS:   arr.length
来源：http://www.sxryk.cn/163ktnwphpj.html

TS:   arr.length
来源：http://www.sxryk.cn/163qxhpkcoz.html

Java: list.size();
来源：http://www.sxryk.cn/163canboyro.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163eyvehrbx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163wbolqgaf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163okhgxflp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dkrudjnk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cjdmkucl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jevkubiq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163eeptekyj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mkmonmtj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163oqqzppzp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gghlboci.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nnnnarcd.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163gwngzcbe.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fhyxputx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rigsvwnm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163izgqxmlc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ybhszmig.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lbsklcfq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163enrgbowc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163oetexvby.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qtbgdxjz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rvkwsvrx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163evwgezsk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dcjzkbdr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dumfojgk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wvqypihz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163sbqxgwbu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ktgdrfve.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nknmbpnf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163czfiyjgs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ucyyfcgd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xdjxkmsz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gevyzlst.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xleyyybg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cwwuayip.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163haliryqm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rxznwxvj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hjflwgkn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rctslyka.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zablewyt.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vhpmepgo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ggpdxqnl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kgtqanny.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163vgyuojta.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163acliaxdp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gqndodal.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ndbbdkek.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pkecofga.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163daswqkqx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ewygojqa.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kqwkgwdc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zqbzxwan.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ocqrfsjv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163smchpxdk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fspzijlh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ydjzvwdp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ywvbhyek.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163okdpanli.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163vxibfykw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zrqxhzqc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lvhtcfmy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sdljlixh.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lrlwpibf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163esvgcusz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163lbqpmqlz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mzzzbhjd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ctaluvpm.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163povvmiaf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rnrznedd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ojkzezvz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163veospvsu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wvutiimu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fhxcpifg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vuriiaej.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qtkuxrik.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163bzvegvtl.html

[D15] 去重
来源：http://www.sxryk.cn/163xhgrysna.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ekglwikz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bwqyrxod.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rmoxwzko.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qrmvgqwq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gfezsayz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163axsolnpt.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163onazpipb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ybrtegny.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jnucwbfp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xnanufuu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163sckcsdsi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163csctcmoz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163emppmnfa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hxmkwzrv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wkyhzvfs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ffpczasd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163esjkpakd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yuajsvpg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xgfzabrp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bqwihhoz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wheozbar.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wffczgdl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mssljals.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cpklttzj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163rairgqkm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lqyyyxvt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jxdpfrdl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vqotktgz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ibygibvj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163yzplsnre.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lzbllxwa.html


<!-- 参考信息 -->