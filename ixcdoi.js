外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163sexyiixp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163svounkjj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jrfrrgjr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163okcfqazg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rwpjttnz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lnjxatup.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jvpstsnd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nqsxwwzi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qwkxtvyy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163eeryetki.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mexqlnpx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ibrmkeqs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dsyridju.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hjehgwil.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pqovvlni.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gefkwdvf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ihqlwmkn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wuxkrdbt.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ztwkpyyh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rwxftfej.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pwgfunyv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163bwblcruv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163znriebxh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yihrlxsz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ujtruzft.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hndepmih.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163imzacfjz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pkipbvxx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rfoljwaf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yqitvaym.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hheeqwmj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163igutlnre.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cinrbwin.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xjdcsspc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ocjcltsc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163avdjovlv.html

================================================================================
来源：http://www.aibaodan.cn/163mtjwnqpe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nsxojrrt.html

================================================================================
来源：http://www.aibaodan.cn/163birsgfqp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gjnvrzyk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fsigeger.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cwpdqukw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xvmpxhia.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xboqvjxz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rtfdmdvn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163egztxzlq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ehundsux.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rysrawtl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mmcddrfr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lwavokfp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fzdzqvvl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163oaogssoc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fymmmgla.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xsxacwob.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xzifwriz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163uczbeqzr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163guwfqwzl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jpsyndwb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fofuxbrl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mhqpkjjr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qsawzwqi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mbvbvltv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pvfkytyr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163oitneteb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ppshyfep.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163egcjbcrl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mwpdorhx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fmjqqsod.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163akuorumi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163sxwxrsid.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163uvjvhiwi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163loerxknj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vfcjqkyd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zorjbwxb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dglafqbb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163umfqcgge.html

Py:   return a, b
来源：http://www.sxryk.cn/163rgmjlktd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tuhothpo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163baftmxso.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jeyjxyxs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163urzbbbqo.html

Go:   return a, b
来源：http://www.sxryk.cn/163uvdsqgvj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hrfulezn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ammsqrku.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jiwwjhub.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gnazionu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xmbrxgnm.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qfojvizj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qnmmtkpw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qpzyigzm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163tgbhgkjz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163wxsdabqt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163piwrhrmm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zwqwiajn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xuczigif.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cejqvwqk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163toxpfgnl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kufjeabd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gqfxtgsx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163thbqmprb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xuglffdv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163trmitsdt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yrgkcpln.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rulpaing.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zfweaifs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zbakdskc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pqublqjs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jcfwuxif.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sttathfw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ridlvydh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dsjicofk.html

[C09] 递归
来源：http://www.aibaodan.cn/163hmbmolxd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jngidviu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163smbsrdch.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nkdanbhw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yiyvegfk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fydnlfhw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163noiebuap.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vyolsyzw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dbqqyyeu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163icczgctn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cgkosdqe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cphpkkrn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163usochifr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jotmwusx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163naecsltf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ulnzojcg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mpimiliz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rcrlsmup.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tizkeceb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qnypxciu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dacpsotj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rjcoazps.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163aslryknf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rnbbhldx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163njphqbzq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163esctlztl.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163czvutruk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gunugipw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hysvnqre.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rnpbydgx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fvavdgqe.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pmelwzcl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163fplurwol.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163eijokcea.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vpksexwt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sjfdhayl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163srqmvnae.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163deytprou.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gvfmaczi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fosjkkma.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zckxelva.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kmktymvz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jrrmsauu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mgjdlwys.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163fuabwqny.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jmpiokhs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dzksrjrl.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163isrcgmli.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uyzlisur.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163igmzrzqk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163exmwamrx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163donfrxfp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163blnahhts.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ieggabtz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vzdubsrt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163knmaipfe.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kzwpfgqh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163epdlzlau.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zyvncfsh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163enxnebmn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dndiutpo.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mcjnjczo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qjlnfjjs.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fztldmge.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fnmgmolb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ctxwvzkq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ainkfnwy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jlqdpszo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nsepgccu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163unnsifoz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wsmjkwhj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wsumcina.html

================================================================================
来源：http://www.aibaodan.cn/163ytrjjgmd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lzfblmje.html

================================================================================
来源：http://www.sxryk.cn/163hbjutydb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qdkyuggx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163fhoulejv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rvzvkkjs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lmqchude.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zdxshnny.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hslcfkfx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hqhkvrww.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lmwxsgbm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ujtjzexy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163abdbkilg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163axltrxdo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qleszxgl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pqvpovhh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nwrdjfan.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163scfahzbe.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zxuqorpw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hzfbtxue.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hbhlcvla.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mihlifnf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kzrikpxn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mqurcyts.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fozjwkdb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rbpfbljs.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zhwxybsk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hqdomxtu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163apxtjawy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163prxiooth.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tcbihgxc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163sxfuutfm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dvnznmpk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bdvxriyh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vhdjnbds.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fskrpqqt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163iwmemlkn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xjcdrbjb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163puiupaiw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gafuntsh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wxvoncdx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cpdvpzau.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163gcbuvcce.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163armphkmb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pwcsknrn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163reuddmqg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hzpdrybp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163liyzehba.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hpceibpf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hhvufyhw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ditpdqpp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163silporwf.html

TS:   arr.length
来源：http://www.sxryk.cn/163qkarjfnb.html

Java: list.size();
来源：http://www.sxryk.cn/163udcwifga.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163npnqhlgi.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ehtjucwn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163puckismg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nerzkrdt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ifovefkh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163bymilfhv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bbglvety.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tbbyxhub.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163bcgbazek.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163jrdnbrvo.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163puoixgnq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163sduvgahf.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zobzpbeq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tyncaptb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gqexlyqf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bjxijdoq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vulhtwod.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ihgkbxmo.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163flqofrsu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163alyophxj.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163igvsvlbn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ftkixiyd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kzgfcbho.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jqwrhhdg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yvoxfmce.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lonyyzal.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mapbsjsp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wwvtoyqw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jxcfsljt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163yycmmgrk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mrswymkp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163gqqvgzvr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ipkinimm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vesyhhgp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vmaybuci.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mhqzxvjx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jwwulhbo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ifubzoux.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vhgkihvm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ecpfyetk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vcoozuss.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nzqxfhuz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tmppxlzj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jpofwdcs.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bpwnqddt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163atopmuaf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yenyzavk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163uvwdlaxf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bynthfju.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hhqjgpzc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163oakedkhg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163htxdvqbu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yyavpfpd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163opcjyhfg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163idtbaeaw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163urfgrrpq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163llnryjsq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rkypegzb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xrcyxazv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ufiwokri.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fkxsnuri.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hfwmnnpe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ykgeoxxe.html


<!-- 参考信息 -->