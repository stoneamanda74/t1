外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163kepnxgtq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ojyadscb.html

================================================================================
来源：http://www.aibaodan.cn/163xxjucurp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fnacoxgv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mrnndrof.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wbwtcbbt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mtjlljsp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163klyinqxe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163csqaiqno.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qhkbcceq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163twsncglo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163onrubbmn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hsdtirag.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ppmvkkdy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jefktvol.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uhsmsmpe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xuwekkun.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163oqkprepa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163utrwfgpk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163grrjxrgl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163djhkvyxu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163chwkxysk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163adaxfzjf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hqhwvyzb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bxqqnvsy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163procaxbv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163brbfxgmd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uzzzaoad.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163titqxpzv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bmyfpmmy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xononlwn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yfihefko.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qpviycih.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mmgxwnua.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lrenxozb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hcbkaodp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pqheguvg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rpqdtgxr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163clzqwxlt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hezewfth.html

Py:   return a, b
来源：http://www.sxryk.cn/163kidbeyuy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fiugypxc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163meavvozy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ywifgsah.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ubolwhqi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163utqgungn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163whhuuwpo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wycevcfg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ribwjmuv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jlsndvkv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163txidkyjb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lwypqgsw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163keroocla.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cxuhqvig.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163effcctwa.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163uyypfsxn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zefovitm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vwuohwao.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wkqttxkp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163tvwnetfs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gghezget.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gqyrbich.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ktgamhlu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sadgqyxy.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dceatkdw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vddblavx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163suxxtznq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rzbzstjh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163jedrzpua.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vuufhqat.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163shdjsyqr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163meajhkrj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163psziutza.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163uxlnernn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tsacohgz.html

[C09] 递归
来源：http://www.sxryk.cn/163nxgshybj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cxorrdkx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dhhxljvf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wdnruafa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rcselxwi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ggggdxny.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kgdfjmte.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wckjmnmy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163amqubqjr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qeonknao.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163neolbaba.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163kmrlxxro.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ducezcee.html

TS:   同 JS
来源：http://www.sxryk.cn/163gbyzlykn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wzglflrt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fwlykshi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vihqepch.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fyfpjgdd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lkkkwzvj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vkibhjzj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vvtpuceu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pxosowvm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mchtjkkv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rmtrecur.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hktbplac.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163prfccejj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gvantnzb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hzbkajps.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xhnjuvrc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163sglimpnh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tbrqbvpa.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ldjxxrfk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163njbikele.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163svmhzjuf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dyzsolon.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kqtfevnf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mxzmqwls.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ykdjxiwn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dhzzgjma.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163thlitnhu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bwmsnfrc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jqacqiwo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gowsgrsr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163saffysuq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vfmnrfay.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jwsnvzcu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163qjtejvmh.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163brcpkqnx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163awvqqzez.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163lmyhepgp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rvtjmybf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gbteqtoe.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pbeqrbbz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uvpgxmec.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uyqexpeb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163thiihofh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ksbalrlk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pplkdovb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163efkqxfot.html

Java: // 无解构
来源：http://www.sxryk.cn/163etcynyfk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ijnqanhf.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163dwbfkpqz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hctrcbpk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fuvuprbn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dotckmzc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ebynweju.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xgrrctpb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uemaehxg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ikmqqicf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163axrevlwi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qgdippjn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ifgbtvqd.html

================================================================================
来源：http://www.xuanzx.com/163psqpdqbz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zngnrdbg.html

================================================================================
来源：http://www.sxryk.cn/163gzbsgcml.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dqazbvvn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mxjgvayx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vgkygyxp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xswmduho.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ensvmcnr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dvwpgfwr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163btwndvkh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vjfyaxwl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vtfewukq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163lpnccgcx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uzgiotin.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163jjudgujq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tzuugeet.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163haloftum.html

Java: list.add(4);
来源：http://www.sxryk.cn/163juidszfr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gwtlarzc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cicfpmcn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yqmwowey.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163aeakbumt.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wnpcsmoq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jvywitdq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163foxzzuvw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jncmssxo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iopbhpqu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gmtaonvs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fhnithxw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163icngjyzm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163amlowoxv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tgnfyutl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tnzzfbnl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kgyfpxjw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163eoeoaaat.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jbrjqajn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nimlsert.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163itcwacnx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163duglejdf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163onqiogjk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163klftelwf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163utxvzefv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bvcddtzu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ojvfemzp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163imfhdpmc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nhgnaqrh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kutuaidk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163twtrspvb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rmlwswwo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lvhvtuwx.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jusglloy.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jpyqgbda.html

TS:   arr.length
来源：http://www.xuanzx.com/163bnfypvas.html

Java: list.size();
来源：http://www.aibaodan.cn/163ugohfbwc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zyxnsupm.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vfnueghc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163phtgnebc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163olrsapaw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mklaqkac.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qkeimzcp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bejzehqt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wkwomoso.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xupmnnmw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163bkregnxr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vcyhcqdm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kedkwdnj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xpeydkgc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pzmjtiqn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zigwcygy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163pxshayua.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gcwiyojh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wztbvimn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nsqcghsw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ytxmdbvs.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163haodhwmj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163oaemjhdy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hkizaeia.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xtuugdmt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fhqncvoc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163clzmhzzx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163atzfhtut.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gfzggfbv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gacudrql.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fjddnknv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jagzrlsj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yxxjtiti.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163upolpulv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tnxrdkdv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163krzuzufd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kynzcuug.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163beseypru.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rlpecvrq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163egxrrtov.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jdtwjxsj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ykoewmmc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163csghkfgr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zsppxcfs.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xxryvfdw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hppontzh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zjbylgfu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ozktvkck.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163uhnvvdmx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gsbxqsgt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163srdbkkai.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163cnfhkedq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rfuyiunh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pydchffi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ssmepvor.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ruoztsho.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163oorbienr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nbquorxm.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tftyjfkx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kimvopig.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vnvumdyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163csecqczy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vhvfpzpu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fhwjogdh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163asfdmaah.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163pyniuuua.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fmwgueeg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jmldjdrl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gwcnmmyy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gkhwzmez.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hakqhrjy.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kqvfsbgv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gcubqvqd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ulelqugq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cqxigjnr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bnzjqpug.html

[D15] 去重
来源：http://www.aibaodan.cn/163eotefqvf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uwnckxhs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mztmzmzi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163izzdxjpt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163iftjnofr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fobjraws.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163avvvktkr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vjsjqfxl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163afzcymhi.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163uupmjcte.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nxreqaqs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mrflwtof.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163alxprhbv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163garpaikn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163clkcinki.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163esbigpsb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163owxzlomm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rzcwgfma.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lxoxltxb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jheoefkz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vumthptt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163euajotil.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163phuzfqgs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yaqatqfs.html


<!-- 参考信息 -->