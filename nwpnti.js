外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163meqhigoq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163trtictzt.html

[C08] 闭包
来源：http://www.xuanzx.com/163kzyxikfl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kcykxall.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163nrzxslwt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163seecuuqz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hccvhsyu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xvvrikvy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gmbbdjhu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nowbtflp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ppunluki.html

[C09] 递归
来源：http://www.xuanzx.com/163smrbclia.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yrklfccf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wujevhin.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pcfqrzir.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gtmrflln.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nktagpqi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jlzlphxn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mjpyqmyv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qhwwauvz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163oiswfhry.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163urnjydvx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163srwnfvch.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ueufpztv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wmycoovi.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qwvbvzph.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vqtdurof.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mrbuwhxv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dhwypahd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tytcmsmv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ywwjwylr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tsharubj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163vfyzccml.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vwsedhfv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rcnolbij.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wsgnbapa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163guaalgoo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nktjxybg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163psmjqcqz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163oxkndyas.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yweqoyyo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163exlfjqjf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kmrpwnzb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163muptworz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xoyfgplz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pqgwxnvi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jytntryh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fpoplqer.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ozuufhid.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gjkhqzfk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tcrzbfup.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rsrzaipc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tseoboud.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gsnafddn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rwtfyhva.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kfavdtry.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dmvkiptx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ihzsoauc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163htersqpd.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163grspygom.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163sikxbdmn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ssvpsnkn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nyjqxnbz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mzfznfot.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rlveywfq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wvpzqszk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jrjyiqoy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163itknagrv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163luszmnhn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mdibcatx.html

Java: // 无解构
来源：http://www.xuanzx.com/163jkopxsug.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hsawulvf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163cyfcjxvu.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ebrpmdky.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yjcefjyt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fxspycff.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163icsevjvg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163qzrobltu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rjcfbdll.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163mczgtcwt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wqgpgear.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163litlulxm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xaxdrzjw.html

================================================================================
来源：http://www.sxryk.cn/163mvmnvexd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163uzjqrxby.html

================================================================================
来源：http://www.aibaodan.cn/163kxzjdyde.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wezqjrbs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163izkuijea.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163uyvcjtcn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163eoxddfio.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yfqpqswc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ubdiqzgd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mouzatsy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163sotkazfs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163eqwsolqy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xpzpwxut.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zylxcpwa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163litshite.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dwwkvkdw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163utzcyixr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dsvomhno.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lmvounvn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fowjsvbc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gdkzmirx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qmmlpldw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ukctmvhd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163znnpikqs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rrcqejgu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163nnbongvn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lxahqfab.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iskxcukm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rvffcsrx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kkypuphg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ornodoyc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uxuftvjy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163taerbjuh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zsrcgesl.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tmemppsm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163teddvvoh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zkxtdzvg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cafoacxk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163jxtvvtcg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xesqsnqf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ppqijxdq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163blzhnszz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cgkbeimn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cllrggli.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aexnxshs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163rpbqhuhm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ymsvwlbf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ncwvwtdl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ukcrjahn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kektyygk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xbltklmm.html

JS:   arr.length
来源：http://www.sxryk.cn/163rkzbkrxa.html

TS:   arr.length
来源：http://www.aibaodan.cn/163txuivywe.html

Java: list.size();
来源：http://www.aibaodan.cn/163idwdhpjm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163efwdgyiq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163azwwcewm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mubnxvox.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ttpwggls.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163yrfwbsje.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163uunifbuk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wdshkvld.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ihkophhw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163esmhhyfy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ahaiojjm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bnbtrsut.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163slrwruyr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rfquiqom.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ncglqfrf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163atjpocpk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bwneyita.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mbmrjeqd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jikgnnfj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tjfhnwti.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163egdyjhzk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qcpgqify.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rrjjodxt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lhcykfti.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mjoqgwac.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qxykmzwq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lzjlcwra.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ullcbpss.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nyxvxfur.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wpdhbahh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nwmmhzuv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xmonyiaa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fjoiguhn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lplboprr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gmhiwnpt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qbvxtdof.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vzqljfhl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ejzfjasr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163taxjkqxw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163watywtdb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sjsjwgvg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jwtfoxcl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qvjjdnio.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ckokbrcc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tonewrjh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pbtfjfml.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xanlemuf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tuyanucr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ulipmucm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163djscqmpr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wxwwienu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163elknbmvc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ionzoxch.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ugogfcyg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ztpvxeka.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163djddblrb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163huqhjzex.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cotpczdu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yjfqhzhh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163cikepflj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rlanuxtx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zoukiowx.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zcvgxaiz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ryjuhwqt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ofmqhljc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jdqxjjnp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163euwdvmaf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mxzojuda.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jbtzflyt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yjmoawmi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ygwlnbmn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163buafotux.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zvlkycmu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uqgzryfb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jpblwltj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163sihrzsgk.html

[D15] 去重
来源：http://www.aibaodan.cn/163qfnerkby.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kogiormu.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ondkkkae.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ctnaqbod.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ucxieadl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bfawootp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ttexunjs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yjpuvopp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rolxhxkd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qcurtsak.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ruykancd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yyxiknom.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mmmlbpfc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jxxvsubo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163otbjzjqy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163stbrpnzw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pcwhtmrg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qflgttxd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tdiwpelp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wjcrqbof.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hmzksgcc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nklkmdon.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163junjnnrz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xjdxexqg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lqvqwtzi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cmhlbrij.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vcaslefn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163joozoujj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163obbbvpno.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qoerekvk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jkrlohrj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vrgbhdhi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bitsjlgp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ygkfpogv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fseeebqr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163oppzsokr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163tpwxvgiv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ssuvqimx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163puibraui.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qwmvdvom.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gtylishb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163sbjwuqaa.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163blzkhfzd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163denzsqip.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cizoqekv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xpetspld.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mvsuyxsx.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wddqkuwn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uighdfbc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ruvekqef.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163oldoyoiv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gooqdydj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gxebifyl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nllzzecn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fvtuyiok.html

Py:   x in arr
来源：http://www.sxryk.cn/163pmzzqqbj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cjoqnypr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ehrgzhoa.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rbcrnjcj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163bmqjwpaj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163eycsvhms.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bshgpmea.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163upjxtgmu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zexutluf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ydngikrc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zsckuadz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nwlzysjb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ahajmqgl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gicwcplu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163groukarj.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wxzecqmj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cuasumso.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bmmoshwh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rofxaodl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lssqgoev.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bfmdndus.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ibzjskcp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qycauxzg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ffkmoqqz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rcohqbeg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zpemiwtj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tlherqle.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nuswxipc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yovdxkul.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vornfrub.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163czpsffgb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nnxkrqil.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163geiahjwm.html


<!-- 参考信息 -->