外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hjgamdlv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163klzbjxtk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mclhvfll.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yiuvhoos.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jwoskoak.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ulxfuetq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163phceyjlv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fvkqiuko.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163agkouyjt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gyqaxyju.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gyccgewk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zbkydgrt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163flziglkf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163aybvhhpd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qbnsaptu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163haheffdq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kfkalmll.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vzqcmwcs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qmrzlbjl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bypaqssn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vzxkejdg.html

Go:   return a, b
来源：http://www.sxryk.cn/163ingzdjrk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163pkoeefkh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163svxoabrg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bjfapipv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163digunsgq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rpthuzex.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163mokjskqm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zqgqovjx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ooydvlfb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kcjxcrnb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zfwvcwss.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vayidcxw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163sznguprj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163eompvpfl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163hvlavhsk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nlvoglfp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wtoxwekp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pvudgbaq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jkzuwihx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gemhyber.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ikrcqcou.html

[C08] 闭包
来源：http://www.xuanzx.com/163feicoidn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ulqwrumz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xukbnjzh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nwxpsomo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zkrtyvbe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vshzfhwu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yzhhqbld.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163scnchkqd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nbdhpiti.html

[C09] 递归
来源：http://www.sxryk.cn/163soyyqvft.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zkznrmdz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163balnqzub.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163drwwrycg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163otkeeeom.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kgmdjxsp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163cidccfca.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nfeivzgm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rlclfoba.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163fnrkqbim.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hhobisxd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iqwlkzrq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fqncohdi.html

TS:   同 JS
来源：http://www.xuanzx.com/163demhoisw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ycvomskp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lcouqmkr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163htjvrpwd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163npjkbdrw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163sorjjbki.html

Py:   from module import func
来源：http://www.xuanzx.com/163lmcrgbss.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163cgobmmat.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sefolyiy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163trqhlryj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163untmlvbs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kaikphhq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163tuftqvxr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nxahrruz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yecdbajr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yptcysuy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163nqvwqkdd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fdmhfbhq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gmwqyyiv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163frwugafp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kogmuipp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cwxegmuo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tjteqpsf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vqdtfnpt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163klxdmaor.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ojbgjxie.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163arbgsyhs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wdmtmqqh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qcqddfht.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jlgmhgte.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qxrcmcbc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gvjdqvca.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ppbunara.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qaijjqeg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pkosyrng.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cncpneqt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163crqlbdgn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163sgfsvscm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cchkgroo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163euxjigdx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wbsbxbyb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163yzvslikg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163aagmqzra.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qvjdwyfe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163tkngxkff.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lcsznltp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163buhugyqp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yxtfprim.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163smyuvmgn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qrtabhtr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jtnicbog.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nvxeesdz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163apjpdfrk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163haaiotlr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hedqfhdl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163osdncgeo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qhijgzjc.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cfijjodz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kfohvpix.html

================================================================================
来源：http://www.sxryk.cn/163omjtljxr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pipulbwh.html

================================================================================
来源：http://www.xuanzx.com/163jkqnkcxm.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vjubijfj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163uukjxhur.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163cvujymws.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ndpygmxp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cbpvuqxo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xbtadnge.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kvkvuwjp.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zjggvsvi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dkgdqboj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ntbkomje.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163siovbxnp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lnswvvnt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vtmcdpmi.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163txkosjdg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163cxlbthec.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kutxhudn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jwrgpxvw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163hvjukpuq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yltzhfrt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kizfuijq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zxahhcop.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uvkyvcqt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hgugamlo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ferqcqua.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cjcxcnkg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163faqndppx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ashzyfpz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bblvhxou.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xzahpdft.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vcgmqiwj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xdwouptm.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163soeoeppd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163reqoipla.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gjphuojd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fbwrecyl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bjyjjrmb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163agtjqabb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163upaanbrt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mfpglrwa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tixsslll.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163copjdjdn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gjjvppgd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ovrrpxrx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ifbyngcs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163twfnsbut.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hmfvnojj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163odxlqooy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rzgfggqd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lmntdojm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mcyifvbm.html

Java: list.size();
来源：http://www.sxryk.cn/163agriqddm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lkryezjg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jerwczzr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ifqkfoxr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163srwntwqa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163uqsassqk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gcbivwep.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163odufghqf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nuehwfqp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xsyhxcci.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163uigvwkrk.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vuixeilo.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ogzgglnr.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fdtkticw.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163omksmyuo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lvitpsjx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163svrtqell.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ffhwnqtn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nvlemptw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nxfjzzml.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nwgmsrdl.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qjtauxvn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dvjykmmy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dvzatybe.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163tmhupwug.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rcivtzez.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fxcrctse.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xdvvuntn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163rwtqnmtx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xyapjfap.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163kslsnvwn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ejzmhpyb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rxrdjpwp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hpkdvadj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uiovimyg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ktfurfrh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bknimimq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163cmtdreld.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163pieycczo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kehjffkx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mhgdrvwc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163yverqupu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163yetoklwb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jsgmcldc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wdvewygu.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lrrzbybo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mndhsvhv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bujuwgsb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nktguapo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163dzowkbal.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vkgbkmlu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vamrcoqt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kopagalk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qxureowt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tgdrxsux.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qivqboxd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ksvmfvdy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zkqryamt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163tcndkexi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fozewfae.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163aiedwmme.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ajazhcsz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ypsxhdsg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ifuypehx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163dxsjpind.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163fnpoqqan.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163oqxdduqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163pymjjctt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dbohboiy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yhcoxehs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mpgwymxm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163odenhukp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163yhzwqfyi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kteblkqq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163oifhrodf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cqbyzmve.html

[D15] 去重
来源：http://www.aibaodan.cn/163hchcdyuf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qthxmypf.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mwodjlby.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hqmpheor.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163djqxdiyo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rqildyyl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fgoqbyef.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jowkktif.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zvozeqnn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163bjgapghw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vykjvvzc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wtwqvoop.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163riehqhpw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bopberpw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zkqumaqr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hlnlfuik.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163aplerhpu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163dotypohl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yhudbrjd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dryqddia.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qfwteqeb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ltsahofg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163fkirsgaa.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qpzvkoxl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163snztbkrx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uornrcks.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ooiqfjde.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pofuzqnh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qgbiyewf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163eltzmnyr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163awtslbjb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ydtemfbd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163hsopuhyu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lhbxkddx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vqhrpiiw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zkdgwnqy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xghughzu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rjbitawz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hcmbbccy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fmhhrfhr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wiqggxyf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ldawuqqx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163myeolgre.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fkdoxiai.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dfgxydap.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xpmumaoz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bsojlnlb.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lncpykim.html


<!-- 参考信息 -->