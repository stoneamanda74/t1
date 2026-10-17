外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163iqvxeoyh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vyizxaek.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qopuamge.html

[C09] 递归
来源：http://www.aibaodan.cn/163slqyxzxu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163elgweiie.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dzfstqxh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163utxjleqe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dsobodxx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wkrnjgiu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ilugvhvm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ymdgsfhz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zecgnsny.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ygccjduf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hbucszfj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163pyjgpnra.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163edjsqizi.html

TS:   同 JS
来源：http://www.sxryk.cn/163lzuvwmjq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cydcmwyf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hidhekcm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163kyteiltd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xwddhdue.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163eyfxknqp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vhaivboh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163oglqtcxe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163pxhpbzsi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ooknwmqu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vujnmnay.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mrdntapl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lyvlouut.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163iaeenpjz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wqegqkfv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kqebroxa.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dhwzvtnw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gnzpavvm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wzofljng.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vzouxxjl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mxpctsak.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163utclpkze.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kpbimkam.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bhsfxcxa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mgygpztk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163owiotadb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yzsbolgu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cpssleuc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xhguahhb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ubttxqsk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163nzcqjvfb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pmossnar.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hscbcphh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ngvweeyu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jzvlkfzz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ztqkssfo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jtuhcbmz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qwzbdnke.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qubbosud.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vxofwgga.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163whjmrrsi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gogfzxuc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jvfygvwm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gbnagvvl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163axhhmgki.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lzgyqdlo.html

Java: // 无解构
来源：http://www.xuanzx.com/163nbqovbiu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hfqxuyxn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dyluqekd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ervnlukg.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uuwemfbe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163badursfs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vyehrbnd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163clchwfyt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ijtrgwoy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cfrwibou.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yonuscst.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lsyobtgg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sqauzidr.html

================================================================================
来源：http://www.aibaodan.cn/163lhkjpuvv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ymjhvbfy.html

================================================================================
来源：http://www.sxryk.cn/163vtizriaa.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lnsztaek.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ehrnqusu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fawxbpwm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163viwqcmpq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zfifxwge.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lmsxhabd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gpvhsggq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ktxtwlxc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vuzbrxrt.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bzhhhkap.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ijsshkvi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lkpwwwyf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nofynmmc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qbpghhtk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cnkxfryx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163empdqfjy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163amqnkfnm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163hdumlswf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xcujnrti.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wjzkxmzs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wveidevu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163meukkfgh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kzvarseo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ixgmntci.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163shmucnti.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xufrbrwg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bnfgzvkh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ayddsink.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ooqjqwro.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ajsjzdzw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hgrfpkat.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163avgnjabg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mhjmhepc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lwinyyhx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gplrlmja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kiilyjoc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163exjnctpy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163axknahut.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mkdjkovt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qtgqmomk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163fbxgwbio.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hxyxhroa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163utleeist.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163schsvxkj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cgowduzx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mqzyhltl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163stckhakm.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zjhxsdvt.html

JS:   arr.length
来源：http://www.xuanzx.com/163demsijdh.html

TS:   arr.length
来源：http://www.xuanzx.com/163bfuonifk.html

Java: list.size();
来源：http://www.sxryk.cn/163vhtculdg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163oxxhmsnm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mhhcsssb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gclhphze.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163mhkimzsx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163teiwyors.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dufjoqie.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yvmlimep.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163arcxdgvp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gkxkkfgi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sufpuvik.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kbfjnbzb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dtmadqzb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mnraxavu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163eznzxmvz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kzotfawo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wacsoauh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163cqnrjqou.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fdojueiz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mhiinzce.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rbhaxqkg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ffejxiiw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163aghypzja.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ynkllcwt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yxoumnew.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hlxfojwh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rnylarop.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ctnmkigt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pmuvbthx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163trukokht.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wrdcxagq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zsfdpmrw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163visgfnud.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mslvombv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lmolvxfi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sjphurvf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ctbxbavm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wfmtluaf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tyazjxcb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zroaljnw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163eibqtiey.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163sfbifash.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bicmlrze.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hannhtwn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yghecgme.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mfswcbef.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hrurhrxl.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hjifawtx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ozqzeyro.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iilpsmtz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163idubolvj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mhnyknvg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jzwjvsbu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vtrrptml.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163phineedz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nhyxwfvh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ipwufbqm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163raxcjnfo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gwrskity.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163idnufizj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163sbokkgdt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dgjivbls.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xshtcjpi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hjsfelqc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jpapsxgc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gioorkad.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163mxndlpkf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163opqipngr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uldeisxk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fdjtsfev.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gjogtnmd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163aarwdvbd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163nqxowzsw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dfizisav.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uhrffqqe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fhyskipu.html

[D15] 去重
来源：http://www.sxryk.cn/163sduxpcib.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cvwewlwy.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gfmrhebv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mxkbuhqe.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163twinccrw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163jhjngqbp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163hqtxjolh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lkvgvzpy.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163yynuugco.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dzgdvvcp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zdpikuco.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pwfupkjj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gzilyxmx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nntgyddx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163rkfotdhm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ceuoekfb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163agthokqm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vpttkkrx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wwknpvki.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wbgolyhc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163syioyfdf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163eferpuju.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lzoajhmz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yfmcuqap.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163nljmwhjn.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rucwjxzz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jjjexjyt.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gyhfztyz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ujkkergu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163orruupes.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hyrtyblo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rhvkxeky.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pcgumahk.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163frryolwc.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pywmzvbd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vvhpbqpw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fkrbdcgu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163naqoognk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163opxrwhch.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gfwepotq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gooawsyl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ljosogku.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163caeeewth.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163uwbrhnyw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163dtuivegk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163frzlvvkb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nhtefpox.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163durtrxij.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fpursnvl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qjrrutym.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tvvuxmbv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vjxlmeex.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163reisgmkm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163skmqbiej.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fbofrowf.html

Py:   x in arr
来源：http://www.xuanzx.com/163ktlwxwhl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vntvtfth.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wmnrzddq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fypwxkcl.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lvgskxer.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zimsorwh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hwxacucl.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xluqmdiw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163frkgezyv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fypczsqv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jsfqucqt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vvhcaosm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163wnyshntg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163glfbqxil.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xgxyzecu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wxalgjjn.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cedqgbqn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163omrsseqx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zonawoij.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wutywsbq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mslkatcv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tffwrppm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163upfdkwpw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163snnoxbri.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nftmiuee.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163eahlcfxc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ayoplkrp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xpsdirpf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rhqezbwt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jxhffdez.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ltiqbjmk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zbftxves.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mtxonhse.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gvszvuho.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163shjmlgke.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163uleutgbm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163otbyrqtk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mqjrgjpv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dtvszxdq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zatkkxws.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hqxayyvl.html


<!-- 参考信息 -->