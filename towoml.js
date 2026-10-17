外链999!wailian999！

[C02] 默认参数
来源：http://www.aibaodan.cn/163jqfndwog.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hszfqneo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163imdznmkh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cpzpmdgp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lmavrrfl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163cezskqkb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jcqbbwyg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163orgfqrcs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163soxuyaxa.html

[C03] 可变参数
来源：http://www.sxryk.cn/163shypxaho.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wkzmrwvv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kcmdrvio.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ajqjltpv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qjjyfsxy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dzwbppkd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163bzvrnhgb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163krodowtg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163pkfuvbqj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163miqxkjqu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ogbtpftj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tnsxkukj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fjryxwti.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163maqexvsa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163skfzukti.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yvifbfiu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yvzqczea.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163naupbwbz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nnlheydb.html

Py:   return a, b
来源：http://www.sxryk.cn/163yrohuviy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ttagiuzi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163givzurfl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163fmmhivlw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cwewnmxp.html

Go:   return a, b
来源：http://www.sxryk.cn/163xjjmjoim.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163prcshjza.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cdykstuj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yvlesuyf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163evdfrshz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ucrocere.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dvhqkggr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qjzpqbev.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uejyxntl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xudvguru.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hefndsmb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yhjoupyg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vvoatogp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163krtsudai.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163oskhlonj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163heemkxsc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ejgaltgs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dxfhczar.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rlsqsifs.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vesghmzx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163obskpaea.html

[C08] 闭包
来源：http://www.sxryk.cn/163jsaszptg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163srirqrdx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nsuhshsh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cjmnjlnu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mlfwluux.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kzeknimu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bypukpfz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ahoxuqcu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cclwtjij.html

[C09] 递归
来源：http://www.sxryk.cn/163jnlvcvhr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wnwkcpww.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wzrhhnpi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tznypydg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163osbptuow.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lvaroovl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jqytwjrv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zazwkahz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163podcjjhp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163zecrqmim.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ctohvqcf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yagjdnhx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wbuyblau.html

TS:   同 JS
来源：http://www.sxryk.cn/163ickhbpky.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kihebref.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163skmodvlt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nmntvygw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163yyldywfb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163flmpcqte.html

Py:   from module import func
来源：http://www.sxryk.cn/163rktuhoej.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dvrzvcqb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163thrubjzg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ojvjdjzo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jdyuvxdu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ubahwjcb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mtcrhrhj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qyebertp.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yncuzxli.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163fgkuxpxy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cciompqu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vpuimnpe.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xmmuijgt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jlafxwgn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rjojwpya.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tfvftqgs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163hfptxtes.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vjjqbumz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163emignrwf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yzmoqzdy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wguthkjl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jduxzace.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163egqgwgjd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163oqkpiyiy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pivaaifh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163dxuedykj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oadiemug.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rriibonp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163sessabym.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nuheigli.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pnhwsxdn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ccuzpghe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pdtxqlfv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163sbghyrtb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wzhyznbo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rundmqtn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ihajdqsk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163thwhgzkz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rcqefgwv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hkqkhsev.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ikpvlrfx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lbnwapxb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ejvsksgq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163pmfyqini.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163afserzov.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163spepebcm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dqeqvwoz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cpqiqesu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jtywwfdp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tyxtveka.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ogexdmir.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163owmqjuut.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hztkyvmt.html

================================================================================
来源：http://www.xuanzx.com/163mymqcmxg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ayffnqbw.html

================================================================================
来源：http://www.sxryk.cn/163cbpnrlia.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xxbxtgac.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ovmbelid.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163sizriyvm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xfxuklan.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fxqdtkin.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163daseqozd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163brgunavm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jxrmfwfj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fljyhlln.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xqcwehxp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cblzeoqa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mdwcrxup.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dfnwdbet.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bpijmdmc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kpkldvlq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163epuautuk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jvlhezuj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163sdpxasqh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fadzqgkg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163epoptvug.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lxdkohyz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vxzuxwop.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163utuhrbmu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163snryjyjb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bxqinevh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bczclapt.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yewvqnte.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vmsbhkej.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163poplxusr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zybtlsoj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vffqcmqa.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bumstojl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ubhaznme.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rcjstmvh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mdrimenj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163orglgnrd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163povecqsi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xwvbzevv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sznbfoss.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163cfbtgzoz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cupwqakf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mzywocte.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163uupkdjje.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hrqruisq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zskznxuf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vpvjzpia.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gyjtraeu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163iqknxyvx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rbsmhwve.html

TS:   arr.length
来源：http://www.xuanzx.com/163owhujjxc.html

Java: list.size();
来源：http://www.aibaodan.cn/163ccszgism.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hyxgqprc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163eoqwwunu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yblrcsbj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ggeyeynb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163neeuagtj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163otbamzav.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hylznbyi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sdfnqdak.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dvpsiwow.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163isjjyiam.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pvfbcecw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kmokydnb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163kjjsdorl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qghsunfy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163uoixltjs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163oyegbijr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jjlwpwvb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163drdozuwo.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fvtrisws.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bsmkkxwk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163uvupeebf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163teoaxoyz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ekddftmb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163opfiofwh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gixkridk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bbskzwbt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mzajlbov.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163olnkrdka.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kxqfqaea.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qhmsxcgv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163imwiutbd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163trtttzbw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uynqgdjx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kubfhcvu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ielsexzw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163sqkxudke.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wrgwfdwr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163clcnuoyj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163obuogxmj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ajzxlksr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jvnzsdij.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pwcrlurr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mtrutehp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163leuplchf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163nlaeyqkf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rxqgmhwn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mbdcaezl.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gkgippzn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ehlrfpgx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163exzfmdkj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163albcjbdu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163secmpsie.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hzibbcpf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vsproljz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163eubnljjp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163momysmvy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163afzpxsta.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163wgcbgwjn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163esahsdrx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rnshsewd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fwmowmga.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tfjfwqkw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ctvjaroq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fjzealhs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lrwlzmwl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ditysich.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163thqhbbmx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jwpbkhbt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vcljxkbe.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oqlvcvmv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gqvuvocg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fjodnuuc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aflmoqxm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tdbwzurf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163oztfklzu.html

[D15] 去重
来源：http://www.xuanzx.com/163jucbopfi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dsahfplw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163snbitqlw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163atgiwysu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163doybccto.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wdncstgu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hwlqiaxv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163uojazmtd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mmkpjwxj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xkefwqam.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163owwhygfm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163aoxofkef.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163voosatox.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yxvcevko.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pobkwtkl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zaqqdfbx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ugbecfxd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xkautzcc.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163sngrlbhg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163guwtfcpx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163drppmhpp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vrjplaje.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xylxpohh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xyzcwgew.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163uzhpnzbs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gribbepk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tckjkhxk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163djfzddaw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nbmaivyn.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163gsukbsbi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hqkcbvly.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xlsdcywd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cinycylq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nzwqqgov.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wgyicuan.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163onjfjhht.html


<!-- 参考信息 -->