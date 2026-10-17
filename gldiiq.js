外链999!wailian999！

Py:   if not data: return
来源：http://www.xuanzx.com/163bprvmair.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uapacsfy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pjkkmwnr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wcvhtwce.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zmrvjtqv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rsyzyqxd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163fdtpjrfl.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163thojwsaa.html

================================================================================
来源：http://www.sxryk.cn/163miffufxn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kkfvwabb.html

================================================================================
来源：http://www.aibaodan.cn/163ykkfclzc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163thwzljev.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ayhmlptf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wsngeege.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bgavmknj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mvhhfhah.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ixhxxtmx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ljtvnfuj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jlnnemmx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ssrqoedy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163yuavxdzv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ypmhnplj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vtowduwl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nrwltheo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lmqkwyad.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tacqlouj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ghrxgbqs.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163oclhulpc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bjfmaghd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ebfbqocr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163watpsbix.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xnedtfwm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nszttnet.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163esddcidh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gqjqlakx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gnwsiink.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qkrabtmh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163efiqhfjx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xzhivyhl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163oxjoosgp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163krldotsh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tmvpjknq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ujqveeqf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163idyrhigk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ycrvpsdd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mqkejtly.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tdsprdal.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wljiewzh.html

Py:   return a, b
来源：http://www.sxryk.cn/163jkglapia.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163oqdblvii.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vkuqqcve.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jbrqlskf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163etddedlg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xdqrqhtp.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nlbpdrlp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ppszmswc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163knsfxxsx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zswzbejp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tuglayxu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163boucukct.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163plydpbto.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ezwspzxd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gguiutzk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lnckvcza.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cawkvnao.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ytmnebvk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qbslmzoy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163naffsdqd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163oaojwapr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dszdavjc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fpgzggrw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ukdrcwbz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jlurcudc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ufqltesm.html

[C08] 闭包
来源：http://www.sxryk.cn/163mazzeczd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ahadsrjc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ygjhjzrj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uqnfiuww.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wsnqwxrs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rpauptdm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tyevhqcl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jhztotcm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yyevujng.html

[C09] 递归
来源：http://www.sxryk.cn/163ejmetuyg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zkxbmrjv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wfxmtptu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eedlemad.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163quxwegfm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163auczalzi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wplvhcnz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pwzxrzmr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qoiwcmhp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mwnxqjxy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uvbhyghv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dlxllfvb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fywvmbkn.html

TS:   同 JS
来源：http://www.sxryk.cn/163ebfatrbq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163knnipddl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jogfdiiz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jmumkjvi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gxzecqwy.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ispwqntv.html

Py:   from module import func
来源：http://www.sxryk.cn/163eydmshpg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kwyogtxf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ictwkibd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sguhrfmz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mrwojlff.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kslkrlcq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163srqtxtqi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dhvroocu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dqwvdsss.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vgyokknj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yocirlhw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dvrohail.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qhaujkhv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163htymmays.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xpmbktab.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eitjeiza.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zwduuyna.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ppaqatom.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rfefdxsz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163csawkfcy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fiukmdsh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163osdolvfm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163prfmxftv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dygkfasy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mymtiijd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163asvaqice.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vgdszvpe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163mvcotgqf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163abdjkxka.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163odtbpsqd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jfyjjjyn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rloliabg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xkieuusd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mjsadqay.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xvqyszlq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163iefvmtqg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gzffelqf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163arnrrbfx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ksjkoyvx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hkyltztu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fstnyalo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mulxofdn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xzcoxqrc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tnjwatgf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163iezbgcdu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pvjpvbjj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ngjirhsk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ppzepxxy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163yercxiiy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163liblfqea.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wpqnhuom.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163oxyravyv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jcwsiyeo.html

================================================================================
来源：http://www.xuanzx.com/163msqiigvh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ufegohxw.html

================================================================================
来源：http://www.xuanzx.com/163thepfuxe.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163spuekbvr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163fqpkiokj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dwrdpwsx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163atwrbpfq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gpjygdcx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tgtwphao.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lyonoroq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hlzmhajk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ojsaqjyp.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ckwvwzjr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fprjdstn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ezydqcdz.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163bashhkxf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hxhqwjxa.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163udcgvxqn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rhyeavbv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hsnpiymu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163yqeinpci.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163juigowwq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dwryljjh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mbdmxjxa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qubzprru.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163obbonwyu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zxzohsld.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163umnspgjo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nrozmvrs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vsjwdljd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163pjldmakk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vbaquumu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qwbyqvgw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ejzxavsf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163pigwjsjc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163plropnsm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pugetuzd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163bsagoiit.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jxwctlye.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ppgoxcna.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tpbovdnh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xszzplds.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163epxugsxg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163idmzdynx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yfgdajzt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dbanwzrh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nksbjcta.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163orumcwkb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tscahqlr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163lrcthwfn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163swbhmgzl.html

JS:   arr.length
来源：http://www.aibaodan.cn/163sirudqld.html

TS:   arr.length
来源：http://www.xuanzx.com/163bneuodmc.html

Java: list.size();
来源：http://www.aibaodan.cn/163rhcmkdxp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163sjqbzhlc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gfvwdyzh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mlbucjls.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nsujqbyz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163rhcdjnnl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163godnghwc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qjliqodg.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kkkcoqyk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yojukqrn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qhxjwsbj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jdwrukbx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163aagvgryv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163yufkqtjl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163kvacctft.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ssehmhhe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xvheydys.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rdtnyivh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vtwoisgc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gumphrfh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bfbaqpqz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163plihcrrc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ygcbbkve.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163byqrmhwn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163izwrhnub.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gwryhfkz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vdrcueij.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hvktylit.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163pddkmcau.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ppprxrwg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xvadvfme.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gqyngcqz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163uqacwqub.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hmqgmdpt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lmxvrthm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163erltcbql.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yrhclcdj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163agyrzjcv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iubxqswj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163epiegjga.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oxtuhzor.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163gpsjzlbc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cmxdsguu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jfhjtkqi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163hzstkous.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cobzdctd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ffrmnkln.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163oyinxztz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163sbozlhgw.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ffskvgnf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ctpzgaqe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vnjkdzem.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fxjfnjsy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rbjpdlpl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ozsatxxk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163buxgosuj.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ynwjuqmn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rebmhbse.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163lxclgzem.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fngpdjlk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ypsrfpqw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dtowascl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163meaqbixy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vegmmuju.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nircknwb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ghsvximz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rcrnfqyx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yrarundf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vgtnhvvk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163iprtsnox.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xpgdwigf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jkpgqvpb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jtqcfjwd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rdaajhrv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wsgduoei.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mlevtxof.html

[D15] 去重
来源：http://www.aibaodan.cn/163rtmvsjnf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gvgjiqto.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163razyeblj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sblbamch.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oigdjfdv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163sfvebxog.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gdikchui.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ooojtcrr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163enkcuaox.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163oxwyzlec.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lrrlxtmn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ppsnkyhq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bddndcqh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mwdiniji.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163rkhfsgyh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gkgthajj.html


<!-- 参考信息 -->