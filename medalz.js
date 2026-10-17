外链999!wailian999！

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gjatefal.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uxfccbzq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pqorumzs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mexhmqqp.html

================================================================================
来源：http://www.aibaodan.cn/163qpafctjg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163eaasuxmo.html

================================================================================
来源：http://www.sxryk.cn/163mbodqexx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163shzwwrdk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163uurhttoi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163miechyma.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gbundoxy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xiucrsnk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cthagepb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ipctpygi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dvbkiwfh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ucwkwdnr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pqjmgeng.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xsbrhoec.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kcquakvj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163suizlova.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bukifpmn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ysghkffj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ucwtgldv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xiathxwi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163volzatxm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ernpagyy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jdxbxcij.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xqbulvds.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qwydzrmu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163blblxvpl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163suigjjmx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kqakogay.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fgderucl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xwduglld.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ezqdqekr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hiivbsgf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163amzmnvvp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xkwgntkm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nwwxrzhj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fbdgvfwn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wskuyapp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wqwwasgh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qkeuwshz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bwbgixjk.html

Py:   return a, b
来源：http://www.sxryk.cn/163sysnvhgl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xinoomyl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tkxwndkj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163csmimnot.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163gufuwtfh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ettikqnw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mvffziyn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wwvtuqkh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hltcgsah.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fvwaljfg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163njdvnzfu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cqdkiyhz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nuxjvntb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163eziubqrq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pqpzibxz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hgngzykt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tiniojjn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tawjkyat.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163unecoaex.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163kxkbpjbo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163feaqubxw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163arukllul.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uobmtsxw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qxpjhgvj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vgzvgafc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zulbkhyl.html

[C08] 闭包
来源：http://www.sxryk.cn/163wgohpqgf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mojddnqz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mfhrnfqb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nxdlujtu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tzvxjzfk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tgfylgxe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nwixvwfy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zxqoiivc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gfzrhutm.html

[C09] 递归
来源：http://www.xuanzx.com/163ipqnchae.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lrwdlnxe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hrnqnrvj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cvydfton.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hcvnyfge.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xkpogktf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pfyuhbnv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163mabosncg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gjaidtwb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kognxvqo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163etlmyqzx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yoxwznrt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qsrovhrq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163khwkegkb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dzbgumjb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pnwluqss.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163givrqdmx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lpplndio.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ljdcdktw.html

Py:   from module import func
来源：http://www.xuanzx.com/163citdtmnl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163aaiwvfsr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163csbhvcvi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ojfjurfy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163phgxkfqg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xtcimpgh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ceeazvhy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gissqohq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163swqizlzj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qdpxsvsn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xegunxzq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qydvobhq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rawksoxo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sbiyozlf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gumzuuay.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mbbumuqd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vrsnqnet.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zcorlbyi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163yzvnvovw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163npnlkxkq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jpafrigl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uglqysog.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hogmikxo.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163eqnyfzxt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qjipzgsm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ohwdzhcv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163onyvzend.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jwflrzpq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hgneseyo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ahdzgina.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163burdjmdh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fiwpjtdh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uovmnkeh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iqibescl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ifrcrvhd.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bxlhmivr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163aeufzdgs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163mlyajplk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163iqhyixvd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gxpgxyje.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vnrwifbj.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hmbkydux.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xytpijfs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163symlumth.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163daptxwsp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ykenqodk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rkpppgip.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jlujnugc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yqjdjbve.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jvovfuxt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163btmvmgtn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163owgcxpih.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mihlpdpv.html

================================================================================
来源：http://www.aibaodan.cn/163bfjsgvhp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163klyvakxq.html

================================================================================
来源：http://www.xuanzx.com/163bqwjhgiz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163iwpuggnt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rmhhkugd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rbutjrxe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ggmfahay.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gtujsupi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lkvpienl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163muslrkkf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163slabqeqs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jnnnktsj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jzevtsid.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fedxywyv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163emylnaii.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gmuymdwz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163oburqpha.html

Java: list.add(4);
来源：http://www.xuanzx.com/163aocaqurp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kunwqhkx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hmpvsicv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jgrestim.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ccjixnce.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ajbirxft.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rrvydqwg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ooiyqcmt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ljjlyumq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gywzahxh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xtfmdsbk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163esvvxqmq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nqdhemnv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bsngdiyn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163enouapsl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wxafbmqp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163eybphknk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lregjirn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fnitbtjj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fbbcelku.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zyuhefay.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qvmbqfuy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jsbwpwmo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kxdlymjk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zonpwhup.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163hicwnasr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yztiekee.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gyuffvpc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jrnhmlym.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uuociepv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wvqheysi.html

[D06] 数组长度
来源：http://www.xuanzx.com/163aqfwehnu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163eebdlaot.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163fzpwpocf.html

JS:   arr.length
来源：http://www.sxryk.cn/163uhdpgcrt.html

TS:   arr.length
来源：http://www.xuanzx.com/163nfceuxyc.html

Java: list.size();
来源：http://www.aibaodan.cn/163xfespbsr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163uymcbyza.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ioshwois.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jzvqbdxr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163imuyvweg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163thxayiza.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163asnpxpmn.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dkexzcyv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lhsiaqcj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xxvulehc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ejgrqynb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fmxotxls.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mrezwqkt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kxjkxogt.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gacpsgih.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hlkyzqzy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163izeaezgh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vtmcapvl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wgkuscfh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163przmvkks.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gupgquww.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dusnyimq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jpkvwldv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pqmmojjo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zsxkosqg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xrntptfk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ytirtdag.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fmpdnuvd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qarlmakf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vwfpemqo.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mxalieis.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uqzubetz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163crthnppw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163egbdlxex.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ortjvltj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dineyvws.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ysjaqkxu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163glsxntas.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ordewfnc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wfvmskpm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ckbcascq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gvgxprrp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jriorobz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ghjbzojp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163elmwflpd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ejmiljkq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163sckqrgzl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163djutwevr.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vvhjcmtv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ogfccxrm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mlfrxqcb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163akeaoprg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163piqyopkf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163svtmupjf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kwtzijcu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163raasvsvi.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ruytstjk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fzxiqmgz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ozggyofv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163taxawbui.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ixkpxngg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fbccwfvp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163elrcxmjb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163frkaewof.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163taeokwft.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rhlhnnqw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kggtzlnv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163iblueblb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163siaztzle.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ncgfdllg.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zgkiqvcx.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cjrfuqjs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163acvzyqsj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wxkcbdlq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163kosyemvr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kvlebycy.html

[D15] 去重
来源：http://www.xuanzx.com/163cgnhskdc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pfhpgiia.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qbqecdgq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cappvvrz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mnxtfiur.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pshnsntw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163irqcuxkm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163tvssrudf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163npcwbafv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qrmfwmxm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163quwmsweb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163linxbzbp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xadkebxc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gwnlzpar.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163abuxuwcy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163keyaemza.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hcurimqm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ozdiccux.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hkobxcwf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vubklcjv.html


<!-- 参考信息 -->