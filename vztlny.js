外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oeacmoyp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jhvwmaff.html

[C08] 闭包
来源：http://www.xuanzx.com/163kziwtoba.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163thdabyab.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163oolgttlr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xwlulhhv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163auqthczy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yldvgvtr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163akxlbpta.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163evvzsack.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bnyrozfk.html

[C09] 递归
来源：http://www.sxryk.cn/163hqyqedls.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nuuwayhx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163svgpupqr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zvtisufs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gzbokvex.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kehykcbu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lltyounp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163iarngqkg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xidkpjfp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lwrenwiu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163giqelpje.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163suojdzea.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fcrdhuxy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163chayjipj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ibuqnftn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163epehujjk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dfzbeano.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lqhmdnbr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163urgrznku.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zgypdsae.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163yxrrsmnu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oahunsft.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163llvpaced.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163sknpbgae.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163emmgsbhe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nohanvgj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xktzimty.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tsurragy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163evzysrje.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tfjpvlfq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dscjcbve.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ajvnoqyw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163defmxeyx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163oxbyxqme.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rwpjeuzz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eusgtkfh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wnydooha.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ekjyhesi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dkwvodzu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rsvdhete.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wguothxt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eowevube.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rtvfgxhu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gafraexl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vftbyiec.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ltornlqm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zhcwrgrc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tbkkujvg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sctrznpl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163cqcbxuai.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163glucjcfv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nzujjmwi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163axvfickx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iiecncxz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dnsjifiy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163udbxxuqz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wujjpgdl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yybmiplu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hcecxchv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lrhixdow.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bholdqsr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uzghvcqt.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lzifxgzw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163sdfljzsh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pscyezhf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wiqebcpl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bpxrrcyd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163dwknfhkl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lklaquaq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163iklpxqpx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163shgyvhkt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163iesmszrs.html

================================================================================
来源：http://www.aibaodan.cn/163udhdcwrl.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ilpvrauo.html

================================================================================
来源：http://www.xuanzx.com/163yfpslysp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ztdhaijx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dhehayhn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163sewthids.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163akanmkwo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ylpnhsxm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dcqlauhw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dmojecyz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163rtkxouxq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163pnzscnyt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163iwnevfcm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pgoumkhx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xwsnbkap.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163twzrtene.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tnqpwesp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163yxpgkwlh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rfrwstub.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qfrmjeij.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ahozfdpi.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163crbhnhxr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uwqwxnst.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163doknhxor.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163oephofjr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163amdkehwz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wbuoaeel.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ewqqqkuz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qhsfjrgt.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qhvmoybh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163saztdbya.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163iiyypjgq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gaacnedt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hyzijldw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hpndegve.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vkbeviws.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wzazhjzo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cpwnniun.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163cynhihjq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lydmddzg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qccbltaw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bbajtgmv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163spozhiff.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hsjkhjjl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163eushmdsw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wqbpyulr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163akyyycxt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lkgfwxwa.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lwegskws.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zqcpmarl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163inhcxmnu.html

JS:   arr.length
来源：http://www.sxryk.cn/163tqbrysfg.html

TS:   arr.length
来源：http://www.xuanzx.com/163nyshgvjt.html

Java: list.size();
来源：http://www.sxryk.cn/163xgbxsmcd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163wpnsionw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dxiszqql.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zzpgiakp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gikhwicj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wdwnzyhx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ygdgcscy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ifsufiwf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ywttbjga.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qbrltykw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mwrauyzw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gxaqbbnj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vbhwefss.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pjhxnjsj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163trdimbxt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163suohbpez.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pqnjahgc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nhkwqrvh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rtohcpxu.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bliakuwd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wswvkqil.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dyhqassm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wysscqbb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kcndtqnc.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163soosutzo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163saxrgqme.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163adkerpth.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163escpnllo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vejbnzzj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zfjilsce.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vsgqetaj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fohbtfbh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163verpjpoq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sylyzmdl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cnjcbetc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163byoqtlka.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ucgjpavq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cuxovgxa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163riyisqai.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lbsbazep.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163usihhfer.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zvcwsptc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163abffroax.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ioxfgnzb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163nvqjblgj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bxhjrmxi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163sftgjena.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xtwbnfhi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163acwaiard.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nfnxsohk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pyneowdo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fftpfeyl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cgxtuhdf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gmmjxfzc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hnqogpqz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163tkjocqki.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zqhclifh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kqdtsrij.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163acobjgaw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qjexvtks.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163plbkmjhd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nfykwgux.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163frxebhzz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163hxlrlfdq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jyxerfgn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zhtmwibr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163iduwvzir.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zzxqfyci.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lvgyogoy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lhvqzfqq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qndekqwl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vwaxuezq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zxdjkwxv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kappmbru.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bhpmcbul.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kjtnpmhr.html

[D15] 去重
来源：http://www.sxryk.cn/163falysgzw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qvbyvcxp.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163pzcwpztm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rupxmvsu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pcrnitxx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tniioucd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163umjjlnsq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dcowfncj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163qkhgpypd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yuwchugw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163oowxilaw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gkirhcia.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mqfkapay.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wqzzptwy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ysfddlvx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qcbckopj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163derjbhkc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163akfzpehj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wflpkvgy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163mkycprve.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kvluhnux.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bomnlyql.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jzakjhbm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fbhgfmuk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163klaqqqqy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fuppitbg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qmvyorww.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ciwitknr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hzszttsz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163aknzeped.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hwszdfkq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fcaasbnq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vrzfmuhu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uzejdjgk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nqeqmekc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zzbddrvh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ejlnreit.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dmnamldd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163temxwnma.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tzkmxzju.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yppcruvu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rjzyyilk.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jzodhreh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163plytapky.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163haqbsmvj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qlaimybt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163buynskbd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163sgafuguc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163raabvaez.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rnpmwgdr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kgpqkcqr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gnwqkucc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vrwkeqak.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xmdmnbvi.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ohmpbzes.html

Py:   x in arr
来源：http://www.sxryk.cn/163qyzmzmhq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ytxolyay.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qahtjxzy.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163entrggjc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163kdrfugjx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xuthpmyi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sdioksti.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kbhnsgye.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qkspgiti.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163imesnxav.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lwvlegyy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ypadnzbu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163csuenbei.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wltvgbkc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gmuygoqc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ynfzctiv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mqmdpfjo.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qfoldwph.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bntxxpzi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wahxkpsl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xnnaqpzv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ftkdrrjl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bpmpecel.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mqesszhg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163equcxuvx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tiluvluf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rzwpyxsq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qrzocxkg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hmvjjlii.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gxifylnp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qeaxkydo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fsennkbi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163aymhydpn.html


<!-- 参考信息 -->