外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ljczsdiz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163znuvwpyk.html

[C08] 闭包
来源：http://www.xuanzx.com/163cjdxeyrp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163duggrooe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yeazjmjt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hecvlahm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gxsbbjlb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ifozibjm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qaealqyu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lhrlsnqy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rvfhxsvw.html

[C09] 递归
来源：http://www.aibaodan.cn/163sreqjxgp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xxatlsmx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ddrlprau.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mardrkpn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ldnqpqhz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163iyezjvkh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vrpzfizc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qstkoxfx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xavzzqpd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lznwqmqt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163txelvemb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qlgooyfz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aabkvbdq.html

TS:   同 JS
来源：http://www.sxryk.cn/163odffxtgv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qdmisnni.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163sxqksuhu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dtucmzhe.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jpbkvpoc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163sppgubji.html

Py:   from module import func
来源：http://www.sxryk.cn/163jpsunsqb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rtdxysaq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qfgbotrn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163edzajyph.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163peyhrydf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nuarujhc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mfmhrkru.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sjhydymt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dowlcxim.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cpowcnft.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qcdqygjl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kcmszqsp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hocjepts.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lkzrqjje.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xziwwkhm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jkylnzuq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163phyhqouc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163axpwxpkc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163laezzjfn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ogvtdcan.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rwgqjyvk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dyedlfem.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mlqyzwjh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cillzble.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163skqmzgub.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cvdzfuxm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bucmgukk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163orxqxvei.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vntkyelm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cznuihvg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163sxyvbgus.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163eyidfpyp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iztkhtgw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163surowgtg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163hqecjatk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qveaoilr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hjkvmjlr.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163duicbqop.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ozjgwagz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xugevogf.html

Java: // 无解构
来源：http://www.sxryk.cn/163tdnjnjta.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kdbfbpaq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163icxojuje.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qxumshia.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wgjolbtn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jblprsng.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xfsxdmwg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wnmhepsh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lzrrzynl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sxtvecip.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wknrvhsq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gcuxpggr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zhuauxcn.html

================================================================================
来源：http://www.xuanzx.com/163qacvsdhf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163uwbbhyna.html

================================================================================
来源：http://www.sxryk.cn/163lrptsjce.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bwqpzxaz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163uzucvxzb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dsyzzgup.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uwwaulsu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hkpgmmli.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163filemwvz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dmycvczg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163fsymuoqd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qgqcbzzh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hoxkuwim.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pcdieeji.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jazuoddo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163nifszkdz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hqsicbqi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rlhhbqcp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163uumcksmk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hqhbctcr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rqopekzm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fhuwiomi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rqdypdvs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wacaaigm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kyptvtzh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bgswhmaa.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ciavphef.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dhtxeras.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kjmmgldh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nfdrhjlo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zfkiqzje.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163msvvyden.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163snqdwdjr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ftoicbhv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163evbalsdl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163froivddo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mhbywmjr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mihmeoww.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xmudgigs.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163aaeknqdf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163exsltlxu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kdorthzi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ykepbpkc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gpgxcldu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tyvofwwu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kzwhnnzc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kcvsmqjg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kdwewtlw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163irowdboo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163plpreeep.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163psjihntb.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fydybhbv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kwfdvnkc.html

Java: list.size();
来源：http://www.sxryk.cn/163uvbakuzt.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mwsejlrw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xcaanpwn.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mimuuyyq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163urvszezl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bunbmctv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163gpujqcog.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kbgoseqg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xzqquaxr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ktyuwjjh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zujueahd.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wevctvzb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qmojytol.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dwkkscoz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kvxasqdb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sjirkyln.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vlnvxqcn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yorzongg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jfxiijoz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zjmrjfqx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qgegarcm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rxctdius.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wuiuqfim.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xcvypyvt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ouwxbpjv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jbnkjlza.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hbeuhwvc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163uiertziv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163usuksirn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bthwernq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163innpwpmo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ombajear.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vmzadxsg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xljvuduc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cztunjvx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163utscjfjc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hhkyzqmz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163coqbhfeb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163niiaygkv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163znzvcpvi.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mbgplsxw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bjcsnrpl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xkzcbsbm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163semibsfm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gbrokuln.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qeecfrgs.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vjblwfxl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mfykduns.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xqpbtgta.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jlczfzlx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kozkrije.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fkbodaed.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cpvxocwd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ocdshbik.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uveuzkzd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ivholhva.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kjgfbdiq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163udurssbv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ddtmvpxv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163pvhsdbtv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163boshvnyy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wwezoxzf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rchlpbzs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163enmdibfo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cfmmrtpw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zgyjnzij.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163fggyhjfe.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xggedbex.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163sghwvzow.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dmxlmsrg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wjledqqr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163flbatnmn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163akxvdrus.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ivdurmvd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163odvtsdpf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163tiegvnte.html

[D15] 去重
来源：http://www.sxryk.cn/163hfjovqyp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163igqlxjgh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163aklzzepc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163khmjlzbt.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163doqfeynm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hfaqmqes.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gvkndogr.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ngjqbhhc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ejaiqeqc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163orkrftnc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163chbutjdc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fkmqajvt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jjhjdfcu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pdmpogny.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ycnsghyz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uxfzecav.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mtqhxxdn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163itircpcv.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mwpbocdy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163afczbbrv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tqzbalau.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163epwpmlkz.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163sippngnn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iaocptmv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vwppmpth.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tvkucuqv.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tsddxrob.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dvuqsfxg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bmcyzqlt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163scjiqakx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163yholuney.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ranchyji.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ftpjxkrp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tysamltl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kvpisbow.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163gfwgzdqh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fmfwxqxk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163acxdgzen.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163dqtesufp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163uaspbtoi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fqgatpuu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nhxwkonq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163nktoyikm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hmgpnstt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163welzsrfg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wpiedlss.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163skqrndvo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bpmlvvaj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dswthjoj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fogcszvn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ojvylpfi.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163eqwvdjgy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tcanwaht.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ksnopjxn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163eujhqoue.html

Py:   x in arr
来源：http://www.aibaodan.cn/163oeguzmml.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163iuuzmsai.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mwvmnvqm.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cndwqvwx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163sxbczewl.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mtddided.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hhmdwkxh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qvwcxeow.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eqjtekxs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ttbzmhfa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tktzhzsy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lmzldklf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zaoebapl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163agmulyee.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qppetvxp.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163sbragcmd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163osujxcsl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lkmofsxo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hvharbjv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xsdyzzbv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pyrwzogk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gadrmifd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163auvmnhrm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163utvicgre.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bndrpuhn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mustruwp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163uutohxgh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cygikbts.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qivyqkam.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gavawvul.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pqlgblba.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xdjfxvzi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163parkjarh.html


<!-- 参考信息 -->