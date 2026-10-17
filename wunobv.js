外链999!wailian999！

[C02] 默认参数
来源：http://www.xuanzx.com/163xybahwdc.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zjpbxfdj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qahuihec.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qzvelsfg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hojkyxta.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zuabswwg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163oxnaqwbx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fojrltbi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kfufmkdu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163aqjzdkit.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163okksfint.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163eldmukho.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163deuwvppl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nryjmkej.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qvaevcyc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163hhjnbspx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lqfxncer.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jaknrzxs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dpqbgurw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163umgqktmq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tmnjvlrb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tqsqmhlo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163whfopzef.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163stouxjed.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qdomfkti.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qjzlwzjs.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163akwytlic.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mpngboug.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nxpziscj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163izynvvts.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dhxkwnis.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163llbmoans.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xeusvfhe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163bhskoymq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163trzjcqww.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163aeligavs.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163enxwnvng.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163etaiyhxt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vhwlipet.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ropdkwwj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gnzgaaup.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jucpztik.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163szhbalvi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nyebteju.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kpgeofzg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gfqvvqrs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qbwteors.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wxgyrzcl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163sxiinrbr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ehrdemuk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163bunungre.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hhptahqt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vxthzbse.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rpvriesh.html

[C08] 闭包
来源：http://www.xuanzx.com/163etzdmmkf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rpudfloi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163obqhiwvh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163czardqkn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ssrdyted.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mtloeujm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mqobamyu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163caqkkzcy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xsgrzlgq.html

[C09] 递归
来源：http://www.xuanzx.com/163iamuunbk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qatwxvqw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lwqemrxr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jyluvrii.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mmmmnojm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hzdjwnik.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rxumslyk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xpmhbxlj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163yzpjmium.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rxmhllhj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dltwbikx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dezewqsk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pexxcsqo.html

TS:   同 JS
来源：http://www.xuanzx.com/163gpszmgtw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wtqkagqk.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yytkzhou.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163snqsiukn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bljzxwwi.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163jnooajup.html

Py:   from module import func
来源：http://www.sxryk.cn/163kvokbblm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dgseeygp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163suhxqlcy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cmkecflm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163olbgjnpj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163racwnqma.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mrufodgh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163lhjalmdc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cdaiolju.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ktknlbao.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ywhfmios.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aklflttp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163doflhzar.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163cxwohktb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163msmolmuh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fbhpkmxx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kuybxqns.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163pofaelyp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jgyetzvb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sgliikdr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zwprxojw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163auairsfr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xpjttxao.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gpjlyzyp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lbhyndup.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zzaqmxvn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163yheotqut.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163dhysykrj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xzzcyxnn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163skkthlhj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ixfchghh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163eafjrdxo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163swyselqu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163eqwgwjuf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jhujfpql.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vsamdmxi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hcjtddub.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sfurmsrk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163karywbjh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vhclzwny.html

Java: // 无解构
来源：http://www.sxryk.cn/163jhbxiufs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163arylyjkq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gjpzacuh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163iojmvdcv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yccahgvz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bfhhmaqq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163talzsmav.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163eufltgog.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fowoxtul.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163mfjfnyfc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163rhkmbsgh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tmegfufr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ugbeoqno.html

================================================================================
来源：http://www.sxryk.cn/163sdrrrimv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vqrijcqp.html

================================================================================
来源：http://www.sxryk.cn/163ymgbayka.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163eqxgduhr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hcxhxgfg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vrzyyihs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zwmksmbc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rsdrxmac.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uphehhkx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bvbpwhrf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tialezjf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mqwnbctc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hacuaibg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mhphcgao.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tyfysxtp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zheyzvaj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163klcbpetp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jttbijrd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163mfqaxyca.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gatpypkq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tlhnkmgh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vzcrmsop.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163uccmbxhs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ngglfxpo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163wxjhahzx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163palnscvn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kyydrjhl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163eonsiiah.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kgnqliww.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cozoxqil.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ohqjugae.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nieldojl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xwtosewa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163nptfqunu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dcvdnvei.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163yyitjrjp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vigbytlk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tbwsknlu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zqmznrtk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nkswqyyu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163duhbxymd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163sghxcvvo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bmsswrpx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163jwbaktde.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pawmptui.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wtfwpund.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jkuzkidy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vrrsonln.html

[D06] 数组长度
来源：http://www.xuanzx.com/163glqchgdw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ngriltva.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kixxczzm.html

JS:   arr.length
来源：http://www.sxryk.cn/163zhkankkx.html

TS:   arr.length
来源：http://www.sxryk.cn/163byokkqtc.html

Java: list.size();
来源：http://www.aibaodan.cn/163ojwhvppi.html

Go:   len(arr)
来源：http://www.sxryk.cn/163uxdgzgic.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ucozjztj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lxyywbxy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163yarccbxo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ebpmtcma.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ynhwrewa.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ahubrldf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gmlcgjbq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vjgxklru.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pdvmwcgo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jnjntysk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xrlxbvib.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qstysiwo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tvceejoc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tbwihzhs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jdofqrin.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mviybzxu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zmlwhmve.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163riqmqzil.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vvxjomox.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ryjcureb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zwczuwqj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hqwmrjcs.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dolwxbgp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xkfznawz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163umngzgrc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qmxblooc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bsncjavd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pzjtylkl.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gbglixec.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hbtuksey.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mneihshq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pdmxgspa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163blvmqvbd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bnsvhsbr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163fkoiwwyw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ahjfwono.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163znrpeaob.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sexlblso.html

[D11] 反转数组
来源：http://www.xuanzx.com/163xfiodgiu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xuklkbxp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yetqedky.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163egdjjkky.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fqtvmjxh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rgckeeup.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sewjkzoe.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lyqbnutd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jhvrgrdy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fhrfzufa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rqnzthxt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163uscltbel.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lglcojxb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hnnnscke.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jxpcvzwy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zbulppra.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qbrjlqfk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gxjqomao.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rkpvvyhp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kvngamkd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ofhemfhm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xgctlvgt.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fjjcfmfv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lzfxlsif.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lefwmszz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dyzuavhz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rpmcxodn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mqpmtbxb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uxsjeoht.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163idmwczis.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dunlkefx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kewgvscd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xjykhhwx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tvnvumal.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iqgldong.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163whdzebfc.html

[D15] 去重
来源：http://www.xuanzx.com/163hhrlzmff.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nqokzyzz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rdawuvsg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163opyhcima.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tzjhdhxj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163aaxfgiok.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gwcquqpz.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163itdxjwvp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wryxpgou.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fyxmslon.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qudgflvi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rjhwmbhu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cnsrncyc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fsunykys.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163elolxzyh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163blqvvspt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ccgjnoqw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qiaghfzr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qtzhjxey.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163auihugog.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tljcvoyr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qufjhpkt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163eofscuvu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bexmnkxn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yzwjsmfg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163txwwyxad.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163srksasea.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163duuweemq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ynengkbd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kdzbemxv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bvstvqep.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rqbzfhgi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yqechgvq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hyxayqel.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ihtmucra.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163yofmhsmt.html


<!-- 参考信息 -->