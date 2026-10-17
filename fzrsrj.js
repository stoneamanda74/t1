外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lrxbsjot.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wqgmumde.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163agnhzztl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xvembnww.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nhtgzvvv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ryqyvliw.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cznizbpb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163awwykqet.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jfyupjjy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tczzsyyp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hvidgoui.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163eajhbfis.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mtqhmjrm.html

Go:   return a, b
来源：http://www.xuanzx.com/163mdgoimlb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ihggoyds.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ckqmxqkt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163pkojzoby.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xsfgwzcu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qoflemtj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dwdudnme.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jrxfdzdl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dnegduya.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ugahqvhr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163czouqhyf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vqahdlqz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vtqucjjo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zkdpgrpg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pxhkpzrj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jgmldtmc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163iqtrrtms.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lqwcwpyb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tzgymxuz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ynguosqt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cuywuukf.html

[C08] 闭包
来源：http://www.xuanzx.com/163cxrtavwe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dahphfiy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ivthmbcz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mafkmvjg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rofywhrq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iypatkrj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163vebxnrlw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ziuxndbg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hfofzoyy.html

[C09] 递归
来源：http://www.aibaodan.cn/163incamomm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mgepnybf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163thwbsbys.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163odepttsa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dsmpcbdg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pxehvygf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bfmfkdrp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cmjwwqdq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vrntvqjw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163sdgsfvyj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qzjuyliw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163axxweoev.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wyimbjyi.html

TS:   同 JS
来源：http://www.xuanzx.com/163dvfxythp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kmpggvdi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163sacqiibr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163glbssejh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zvdzumuu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ykginfnq.html

Py:   from module import func
来源：http://www.xuanzx.com/163hdjbchcw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vzncnzrp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xyniysrh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jobjzuhw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wuanijdi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tugvyckx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nxmoppic.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kaifzchy.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qhrrsgir.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mqpjdfmy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uahrvzmi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mizfngca.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pmvmpeja.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163henkzdrx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hgnwvmxl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163qekshkcr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tiojbahe.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163orakbvhg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lvnxuuft.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mcytvtlz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163exlopfst.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cenqpono.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163urwamvpr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163sgtusbnx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ywqkwqmt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163wccpkazm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bnrkimat.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ejfihlji.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tzvbrfjx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oudtewgz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163sulmipwe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xtntmzog.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dtcxiifj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163owuvehfl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163eyzpddrs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vpqcjxwc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jegbgpnk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cajhanav.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lphgzqlm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qiiwhwuv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bedumeoq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163yktfolci.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bynudxft.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qbfmrpvm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ngloykaj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163friapjan.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ugkqswya.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163odbehzpy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bmpwoexd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163srdqdxbu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163plcthihr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ohqrkdrq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ognrkrsx.html

================================================================================
来源：http://www.aibaodan.cn/163mbrwsdxr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163iceduera.html

================================================================================
来源：http://www.xuanzx.com/163moewpfgy.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vklgqdzt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ymwtrmbu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163weizrxwg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163umlxslsp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163okxlvzjd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dutoirgg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xjogoqos.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nwvwiqbx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qvfnttsi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163buryokgf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163niwzockn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fmddjozy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wtxyifcm.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163etwlgrxz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ddhjepdi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rgwuycvg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kjknevlx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vcptisel.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nsuoudru.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uydyvwst.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163upupgaer.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ilpbuazr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163juoelvtp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xjodazfb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163zvckfpdl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tnldhofx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tneaflni.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ouyyxodc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jcnimkrg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163llxwpfxg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lsyhxeal.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nvcejbco.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163grpdmqzg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kolozkkb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163muiqgktx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kphhhehe.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163byiydnen.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163erhltyrd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163znnkssyo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163yqlaanqw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ubnzrppx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xbbnvlgv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163durfmkls.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dmpwdxfo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ujxyrsgw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tkklvbjj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fzroifrh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163opjrgoww.html

JS:   arr.length
来源：http://www.sxryk.cn/163tqulcqmo.html

TS:   arr.length
来源：http://www.sxryk.cn/163eybenmuh.html

Java: list.size();
来源：http://www.aibaodan.cn/163sipkdypx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ktmfqyjr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uzhtpslm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tcpsqtpw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nccrgsmd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163irmxuttn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zycgrjzg.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sgbkwbtz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qltgtxai.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qkpwdata.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fkyaahff.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163skdztbaf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jjzwyotx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163txfnfwhh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mhnxndqs.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163piyvgxua.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ivgmcwzi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vfjmdzlv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ktlibcfy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wghkmase.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163noxgodnd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163euhiqzkg.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kgjegzco.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gfgboloz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tjnniffx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wfulqhsr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jxshccrt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xakukvoa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mpgrguqo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qefjzntf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hefxpctj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163aceqjgnd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163oevbrjfd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ojlnnhtl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mlhoafvz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kghoklto.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mzncetym.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jkqytukc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ysuyscwy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ygvihqjk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fjvutnjd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ntpjpntz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163pedbpiua.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ppqaetbh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163licnpkjz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mkdjkyhf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ktnqboot.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gxbfnevy.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lldilbrj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rccjjsow.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vkpcuhzf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163sampyqni.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vmnlmknz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ferloxye.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nufmnsqy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163azzdtybk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163alzlqsiq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163alrkdbir.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163kxxfiaow.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zxooozfz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163btcrsopx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kfmwxljy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fwpkztql.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kfnomcun.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jvkpvayc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wgdfsdma.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vfqwmsth.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ticzbhtz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bgcpkpqn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ukyasfdu.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dlxmjkic.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jplbkzzh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163exikhdke.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uuovbqfs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uyydlllg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zmzacekd.html

[D15] 去重
来源：http://www.aibaodan.cn/163kbitcgki.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zajzoquk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ywnecjfl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lwbgxhrf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163evmdphcg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jrutcvyz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ydgzcwem.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zldcdoob.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uwygwixl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pvzlmxah.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163kyfhqibh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hctreofh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mbdqxnmo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163davpfgqy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zojjzvjx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wpaubvxo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yjhtrewc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xmelzhyk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ovcphpba.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jtwnzpyy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vijidlqi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tvzhusac.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uggjriie.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163flrwqxbb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wrgbxxgj.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vsqphesm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mhexaezb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fftcumzw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163lcxbbdhg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mfrxnfne.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163fubgjmhl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bylknxrr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bkfboohl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ntppsmva.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163jqbxzosz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gnwzzqxp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jrfvnxar.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163kttixpdq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163govqilvh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gjyskgoe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hdffgjzp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ojvifvkq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lrctjtrd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163yxrgrzbt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pgainsxg.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tbhistgq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vafkvsco.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ourxbqca.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cpjsvbls.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163greelbpp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vifzfokm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163slaizbxm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163txkmtiuy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ourdmlqf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ljxlnrja.html

Py:   x in arr
来源：http://www.xuanzx.com/163gaxebkcf.html


<!-- 参考信息 -->