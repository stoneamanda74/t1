外链999!wailian999！

Py:   if not data: return
来源：http://www.aibaodan.cn/163vjwixcrq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163sunfzjgq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ycpkqzvk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163obsbclca.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rrpwehlz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jrmyvzhr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xzwlaycv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ybovaaob.html

================================================================================
来源：http://www.sxryk.cn/163igajqjni.html

C. 函数与作用域
来源：http://www.xuanzx.com/163scdeanbs.html

================================================================================
来源：http://www.xuanzx.com/163fexrijul.html

[C01] 定义函数
来源：http://www.sxryk.cn/163krrqmubi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yghhqrqq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vvwelntb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163svptvksd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hzwypuvl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hkvckmpa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163syjbwrha.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163bkksdfrp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tqhieazf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ochptgam.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163udkpinue.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jdbhkqtx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tetwzsbl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xnhuevcf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mswhbecn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yfplubfa.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ckjysluk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zxseytxk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163rjpsbcul.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ckjqggnb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163oahcpgjt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sfgktlyr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kdqzwjiy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ldsojxlb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qskvhbkr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fuduupmq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jbxgdbbb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zqqwqsek.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vhchgoqo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cmublijz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zqbngkmd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mhijmwgs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nxngydql.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mvkvurmx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cnyrjzgz.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qhkrhwoq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gktxblsn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vndbvzkk.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ppjhwrte.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163tbqhuhyc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163yuipdivo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163pwmjjjbq.html

Go:   return a, b
来源：http://www.xuanzx.com/163ywxmipjo.html

Ruby: return a, b
来源：http://www.xuanzx.com/163enmcmgvl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tlnupwom.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jxgkophn.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yroxjvid.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wdnbihkr.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xfpnbvkp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163srgpyxsd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yarixrro.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qwgfprdn.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ujrnbrif.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kwdqvjln.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xwckwsai.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163aaseixjl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wcgfemdh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cwloqszb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mybqpnug.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pgnjhkob.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kfhvmnob.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uelobmmb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163pbjumzux.html

[C08] 闭包
来源：http://www.xuanzx.com/163lodahtvt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163msyjbzzn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zgfposrt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gmcixxqs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nfzlkkbu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163igtkfjog.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ndynobcs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hyhdsjuh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163awreaqkn.html

[C09] 递归
来源：http://www.sxryk.cn/163vsfgcejl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jidtdjmq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tzxgydof.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163akqpqwxo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aklvmxim.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163uybseipw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163emtfvbjm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163flthhwrk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mndjrlts.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rlwhnogk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qnpmjkoc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zzrstmti.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163plngwdwk.html

TS:   同 JS
来源：http://www.xuanzx.com/163erfdjpbe.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bjchnbod.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bkecxnvt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wikfcijh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jpvxwjgk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cuxxnkvi.html

Py:   from module import func
来源：http://www.sxryk.cn/163kubhstyh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gjertkhn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ndtamist.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163azsrqgzv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qhuojmbq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ogrqfwsn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ajlctkcs.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qdqfldqo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vidnoguu.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bvgrzhdo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jlvbssxu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163johdenqm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pkfxnhky.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mjoxxydu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163pbvpepxw.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dnmwhlfa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yrhxhigd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hsuhwhsv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zepmegub.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lsgeuhrz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xfpglhqr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163izovzhrn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ogyzeprg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163swnklrof.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pnszxwfq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fjocprnf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wuwjdhdc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163qcvmtyol.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ijkfpqyt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qcppbglr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163xfufpjtf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163aulyeydu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rndvyopc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nevjkzdp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gifvpfre.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yiftsgzp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wikmggek.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163euybmsrb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hewcdcee.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gbxblmuo.html

Java: // 无解构
来源：http://www.xuanzx.com/163wntknovz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hlmjhjuk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yroqzpsh.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vsohadtb.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tiqcrnfr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163swmhtrha.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163olzfjhqd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qlebpijp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dpswcrmo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hwxdxani.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wcxpyotk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wrbgpkgg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163embcleki.html

================================================================================
来源：http://www.xuanzx.com/163qvodsqsw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zdqsohrb.html

================================================================================
来源：http://www.sxryk.cn/163epwueytp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cttgwoll.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163elyhoebr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gwguwxbf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bkookyql.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mrkedwll.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nruxzhoc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163meydpgsd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kchhajkn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163yuvemywh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163hyyupuem.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163yvpjghxo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zwddelsh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wheoflhr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ozohnxyv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163arylrdez.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lqgghimi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uifqzrui.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163utiecxmt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163smzrimqc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uzyicrne.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zutqhvgv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zugoykyb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vabgqyje.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163atzsjqrh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qmtfzjfe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kuvfchub.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163zlucjxiv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bszsfixf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ynqvzzif.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rhjpwyxg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163vtixwcbg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163upkssckp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mymuaplr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dwdscjde.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ffobpoig.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163oxmekxpz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tucdzmjp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hwcvtjet.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vqmhghna.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yyhnrryc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gcmcpvys.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bckaielo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ojmzrskk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163biefigmz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163foyxqvyd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wmbsezzf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zfffultm.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bchucdba.html

JS:   arr.length
来源：http://www.sxryk.cn/163qmxjxxzq.html

TS:   arr.length
来源：http://www.xuanzx.com/163xlxjgdqi.html

Java: list.size();
来源：http://www.aibaodan.cn/163visirdwe.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xqfgahhm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jjdqavjy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rsvobybe.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163esinmemk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dfikwdes.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ankchwkd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iolohjob.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zktfijap.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163prslruco.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163lybkdpid.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vuqhclgn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hzjjjlap.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fmddzehv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kajcbuxq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fftsycrm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bgyxzeoi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163frdavofn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163giclkxul.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gqpmfydv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fddsnhdb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163funrwawc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zgasqkzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hrduxetv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xbuglbew.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mhvcqnxp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vmgxphpt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163khaarkip.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163oyjgwrfy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163eizegnmo.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163slavbjle.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cmvumkun.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163sdjsmyfa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pabsbrbh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mpsszwra.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163brmwgqej.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163sxaebfqu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xupavzmv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xpntwmdz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uorddaoy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mzfesovy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163icrkgisb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cxdpdofb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tyhaujvv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163oqezxrxx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qzughdqu.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qotvfxdp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nopqabkj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fzpeemoo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163yycfqale.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pqnvmuua.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163lositbdr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tprixwoz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dcarnjlq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uignkare.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163drmwyxsw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ohmyilgs.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mzxeqajz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rrgvbjkv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ayxxdjap.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xudifdin.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xsxfxdgv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sjwnyabl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163uzbhqjuu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kkebedth.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163whtckwnd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ithqbllf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qcitdwjl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cnubagpb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wbujyhac.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vsyxbrlu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163uhjakxlw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163irlqcjjp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fzfofyxq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gfhjdzrb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nfufplux.html

[D15] 去重
来源：http://www.aibaodan.cn/163ijmzncde.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cmxmluzh.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ihbhtphm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163myhylbtf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pfqfxhtk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vrsnrmfp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yzoyxygk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163drdjrhbb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ditcmggq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163sdpeguit.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163tqkzlqkt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163luskkjbv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iipwcetl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163esrgdbgt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pbsmdjzj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163kstbswwb.html


<!-- 参考信息 -->