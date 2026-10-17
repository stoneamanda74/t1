外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vhlgcsnh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kfzyqqvm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163oyboisgn.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qmvibeeb.html

================================================================================
来源：http://www.xuanzx.com/163nehermfo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wnsoqvqt.html

================================================================================
来源：http://www.xuanzx.com/163pzaqhsot.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kwneoxbo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yyhahhhw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yzfhcdul.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gzgxrgxw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163esytlyec.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oqauhybn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163izprcuar.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qffjrlxc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163biyjcwgj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163svgwgtrb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163enlrxrcd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eigjhgyy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wacoxxut.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ocnyqyuj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163niarnqpj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dgsqpsgc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163mcjcnvdr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xpgczpmx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qjnxhpob.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dcwkuikb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kxiqmkot.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bdvgsjkf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hztyythl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pupslicb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yrgexyhd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163feyfpysu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tfxqflad.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qmswthtz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163twieqwvh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163skqtdqim.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ngxfwkrr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163uuljgqtu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hdqlwfuu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qvqesdbg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163esnxujgj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163djgprpsx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lvmnhflq.html

Py:   return a, b
来源：http://www.xuanzx.com/163oytbahab.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163eoxugkhr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mdslhkfe.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uqiiesvl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nqvwmkem.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zxsqtzfv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163klrfaqox.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wopurwlk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hmsjvrzh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nlkemigr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bcumbohb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sopmvmof.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uysgjypu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kbsqpkez.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ewarujxy.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zmtivxtz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vsklftdp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rqaoezut.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uuuyzqww.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ezrvundc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cbaqcjed.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hwqrlpae.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163okdngseb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vcjgkfmf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163utaiajoc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sivjryzm.html

[C08] 闭包
来源：http://www.sxryk.cn/163vbnifchr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163alcahnpm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hagguckh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163issogaxl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ieumiana.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hvplebiv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xhudmorn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qmphupcy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mcxmxcsy.html

[C09] 递归
来源：http://www.sxryk.cn/163rmtrilgw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hhhawnkx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163pbqusigw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mrtexopg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hzronttg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xonqfxho.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163arumsnif.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163uzzqyenw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gtdwnszw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ydeaaoby.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dscnkodh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tfbejpbh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163unveocgp.html

TS:   同 JS
来源：http://www.sxryk.cn/163wnsuqpfq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tjschcxx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qyhjicxl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tcxabhms.html

C#:   块级作用域
来源：http://www.xuanzx.com/163byozajxz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gawxuvbj.html

Py:   from module import func
来源：http://www.xuanzx.com/163kiispopm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163yzgdsxty.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yfbeffxv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163utfytdte.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163soitjfzx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jfprqged.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ftwwnmqu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163synlmwbu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163opbgqzyl.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pmzfoszi.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mcvwvcqx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163apwxervo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wnsuetoj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163akxiwgca.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gcxmfxls.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163slfwigye.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mhwqckbu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uagdeljs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xbbzvqtq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vdjwaazn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kpndhbpl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iozypbel.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tyligioj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ppybivrx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163sewhndhj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163eylevtaw.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lvovvhan.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hiwmubts.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hafazwpx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fntmovpu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163umbhkbcy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sgbopask.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ljuzyrpp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gopntuue.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163revodnfm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163uzaoiasc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163izygfrlj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163rxkiqrxk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wottcdku.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zztavscj.html

Java: // 无解构
来源：http://www.sxryk.cn/163dsachqwb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163bfrvcpln.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163cfkhwmmy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163yzivjfej.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dlidxzzv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ivxgipqz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hvygpaak.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xcrctrsu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163edtwhlhg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163muavaidf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163axacszdv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yprcoqbe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xzhcegub.html

================================================================================
来源：http://www.aibaodan.cn/163gmgtaldc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163uepqpkje.html

================================================================================
来源：http://www.aibaodan.cn/163bzouiklw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dakaklgk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hvvmrojm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163nutugjjh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dxjhydmo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wngahqty.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pnsritpm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163iuzhnqqw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kgzecvdc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zcmvlfbk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xomyujpx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163nzjogbgd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gwxxkzmm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zhjeyqso.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163pifvntiy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163sdnnidzg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nkfiwvcd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163trxunugf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163eqlzweut.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gmrnmqqe.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163aonrkber.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163acmnhdvp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bsadcntj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163avahgeer.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163olnlhhyp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ygqtblao.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163euwdmnlk.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163siqpkvkt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163doxkowlq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oqljxajh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163hprygntw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163tvgsgohf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ggucxnlb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rsefcmur.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ftldmyue.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xrdehmho.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qzcvrshw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ylywkihi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sgvhzqji.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jbtdkjjb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163brqsqzjq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ijwvqjxw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163iqvzobfj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qnmryyiv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yffgxnut.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163qylzwhsd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163idyhsccy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163svbctobh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qdryaxvt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163iabqmbgv.html

TS:   arr.length
来源：http://www.sxryk.cn/163dsrhswgs.html

Java: list.size();
来源：http://www.aibaodan.cn/163xdydtoqk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tgfziivo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kjamypip.html

C#:   list.Count;
来源：http://www.xuanzx.com/163moccyiqn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163oqrukmkl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163eudhxcca.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pgifyacd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gooqbyua.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fdvszrsc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iynmygjn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163uqggxfci.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163oxetbnbm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pbgqbebm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uqqnbglj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hnnvwhus.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ylldsjyc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ndhqbnpp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163thrqhaqh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pueexsei.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wzjprakk.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ijlgqcyz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wmdqpsnk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163onqxkyyi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wjswkenc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163azknmmap.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zhilimuq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ulbmrmjl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163txcnamah.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ysnuttxp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ojdzyhks.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163pruyhhpl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ikouisyu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163newyfmem.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nvlhwtmc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xmqrmuru.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lithlerw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lxzqpqxh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vdtmjodl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jlzuvubl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rirsubvu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163gaqnulqm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zwrqhtym.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hsauimxk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dwzsisrk.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rlhzzcix.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xzghbgev.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mnbqyqcw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wxdlxnyp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fcoxpfnn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163oarddjrk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tgbruhrp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163imhmznqs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rlkhuhix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hgudvyjz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oqlfuwum.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163puyynvis.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jqvezikj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163mobijcqc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163srfzioeg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163surjfdfi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jlwkhwaz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hodxncrn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zkxrailx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163beiycbjy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nuattaae.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163dsdhpbif.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bvhfhtpa.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163djxgynns.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wyrecoex.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wsgmmqhl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qmowsfco.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kdiofkjz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hirsiocl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fqunvwcd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qnriqvxn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vywjgbbc.html

[D15] 去重
来源：http://www.xuanzx.com/163jhgvguyv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gledodas.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163byjriswg.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ufrnpvga.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vomefmzq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rhcvuaqs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mfwfhqqj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ftswevpb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xyqmjyro.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163pjwerwuj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cmogdmvi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163psiduzvu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eobomtrj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mcggzbye.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jpmcnevo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163exfffgpq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rnpsxlir.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fcbdnmmx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wxttycun.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ijtbpuis.html


<!-- 参考信息 -->