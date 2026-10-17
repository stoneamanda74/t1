外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gkyppdrm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uuwhtznz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jnuxyura.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ayidmckb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163emtmawtb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163idttrdkx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ozitzsdv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163htvimsdl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jwdbwwia.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163txikhehc.html

[C08] 闭包
来源：http://www.sxryk.cn/163aaxromvp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ubhvjnll.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163srhxoakk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nixgdxbt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uwjxdzlj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qkhxglxc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tortmgqp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ttafvzph.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uzixqqfw.html

[C09] 递归
来源：http://www.xuanzx.com/163vrrmjuyz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kqszrkyr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ktzodcav.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163uakdiidi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163etdeshyk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wmbyjohi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ydqqmxcc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rlohdhnb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jracygki.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fctuzonj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mimxjsrc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dhkkfpyz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fgpflksi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163qvmlpqai.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pfpqljln.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fznvxrlf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fvoxnynu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qsvkkhph.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hdvpykgb.html

Py:   from module import func
来源：http://www.sxryk.cn/163gmblglvs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ygucjbtt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wyjideiu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163usfpggwm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zsydmnms.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hpcdlvgu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163swkkcsya.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163tedxhhps.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163oaidjbtr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jrvyvvjb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dadybgxl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cgcfynbl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gwcevdnl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163uqlzcypm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gpaxyrxg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ufxgvhgr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163dyvmotmj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163renbzxnf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rybotwjd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zjppjwfa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163caihqlcq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yyqlebap.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oyjjeuet.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163evncgzrj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tjplitzl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nfgtyegu.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cihoywxz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hurchles.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rbmbofeb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163romjdhfq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qpyhijmh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xwsoxooh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163nbshvawz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ygaekfwz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gseezknm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163aomlkhpq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wfhjqjpu.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kottvkae.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uwjwmzhu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zbwvpzug.html

Java: // 无解构
来源：http://www.xuanzx.com/163uwgdyymn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163uwqlccca.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vppcsajr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vfbwfyhf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mhywehwr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cpjhhpma.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163plcppwdl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mhnliunh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pfttfaaf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uwghhrvx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xiwntvzk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163cbfwurwh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163orzwmgnw.html

================================================================================
来源：http://www.aibaodan.cn/163jtsmglae.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163grhmhqzv.html

================================================================================
来源：http://www.xuanzx.com/163vuttmljy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oycualhw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ucczqchg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163trxgenct.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163runtgkvo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nwnjnarm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163iptbwzvc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kwzzwcuj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vjobuygq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163yrqecubq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pfbsllzf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163iaiauzom.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dqwbyssi.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rscufjrl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163axapqelp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jtublyal.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163eodxmyek.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cyhryduo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163soryaufs.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lppmaplx.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dqlagyuo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163atvlegxk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sctxkisx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lzjsgxgv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vgbetgqf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kbqodlsr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163slakfctx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163elvucgnz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ibannokk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oovmhnkn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eekyztln.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dyphdsgw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hyercpyp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vhdyimwc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163owjsatea.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163pliygirw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rfimmrve.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ztvpckje.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uvxcnrwx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163zfomwjql.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yszejgex.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163clwrczty.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163feraocjo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zzdzuvby.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yndzuahx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163oyrlyxok.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163txiavteo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ywpetblp.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ukszjwtq.html

JS:   arr.length
来源：http://www.sxryk.cn/163tparfsdk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163cpmvxocu.html

Java: list.size();
来源：http://www.sxryk.cn/163tqzetkol.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163apaqlbkv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lrsafxcs.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ghuhbkun.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hcfnrhmv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163efvsymry.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xkqikydh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zpctecls.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vdsmoact.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ukiemjgu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fxhgcaud.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hayasvmc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pciptlbv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jpgrorht.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163eozxxxwb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xtgqecab.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zdypztxc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163giddvsur.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mwsxcxso.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ceeztnky.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kohnujrg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vkrjkzmp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rswubpqy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dkkyinqd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hmattibw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zurqnnxj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163euulwrgu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ooqcyrvp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ukpzjsug.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gsxndsmf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nedcgmto.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wznnchgu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163votkuxga.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vskyvxpw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163norzbqeu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qqkmapqe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mvsonfbi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pioqtack.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dsxymlml.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qatoilhk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163sagpawqa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qlxvftck.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gboohxrw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gzqqdind.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zpjyavkj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xviybeiz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xnpelroa.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wibvkepb.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nlnkgiqn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163weqasrri.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lzlbybpl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163lyvakodn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xihferzf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xzecyget.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163maaxzgdw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163iikfmbtc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163uwzsgjvr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tduzxuaw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rxaigzvo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ljnuktpg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163aagsdpmt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163labznndk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ehhflxbn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hvgrexzc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mwfpzdzp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lfobfugn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zpvyehvs.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ijkkfbwv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163tmlukuaj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mbpgzjga.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ldzjzmds.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fpytwsnn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ziurcauq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xzhozqsa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wnjhudzu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rsprfybo.html

[D15] 去重
来源：http://www.xuanzx.com/163uvewwosp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fhxkcyqi.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kusfxdgb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gkcrgtat.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zlplysyr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ddhiykwf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wtsqvfsg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fwobqqoy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rmgdqsau.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163iazbmpvi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ktoafjmv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163czwpyvpi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163twzxeiht.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163owldsoan.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sdpxwaug.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zbskeqfh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jwzebapi.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mwopvton.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ubhkbnri.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163gywehrwc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dvwikiha.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kqnhexxu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vukvmtdd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163brxraffa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ngaodwxf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fupqusnu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163lrpcrpxu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163aonhniuk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hdztzdxo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qrqmqzcs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163nayblnuu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qkzqajfx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tefyeyal.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163szznbeia.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nyommhfy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163arbkiuxo.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qyqzrvwf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163setgwoup.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163igozuopz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rauozozs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xheorzrx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tplnszzm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jvmyfkjp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jgbphvxn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pslevyry.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163iuvjaida.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lffqneak.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qdwecvgi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kujndpch.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xpwgiwzr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dtkgvhob.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163smpflryv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163fppwmxvf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163beaowqum.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163chyuzdum.html

Py:   x in arr
来源：http://www.xuanzx.com/163bwfybyqn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ojpkoirs.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aunibvao.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vmtugfuv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mpdeaxqa.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ojllfcnx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nhhdvrif.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xahhyptj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163uthxiwyl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nxqvmyzu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jjqrilhg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163swvbzpoz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rbhdklzz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dvcxlnff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163cmljbweh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ijreijcg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xjtwifoy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bojywspg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nskxmkux.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163liwpyuhp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mpzvthpy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pdhkzzfl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pasrtdth.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ogdfizwc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163plasywsn.html


<!-- 参考信息 -->