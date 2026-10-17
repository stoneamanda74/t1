外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qhtvbhrn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163debprney.html

[C08] 闭包
来源：http://www.sxryk.cn/163bmzpdjxk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xziayxkl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ddwpbpmy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ubkivwbf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nxsmyrhv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qpzfsyfh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qpwpebhr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wknxminz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mjjgxkgc.html

[C09] 递归
来源：http://www.xuanzx.com/163kpytyjow.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hwzgnrfn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bgsjzwtv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aceeskle.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tlwcjzri.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xvhmmlbp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hlsuxcjt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dciuejyk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bjkdkqet.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jkgkmugn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tpstjpax.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rmmldmlk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ouddkjwc.html

TS:   同 JS
来源：http://www.sxryk.cn/163rzgnjjfd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tpfkryww.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ifumxhqm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xnstoihh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bqtqqiwl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163fjdpcqun.html

Py:   from module import func
来源：http://www.xuanzx.com/163zkiubeem.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gifodrml.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nlqwpysl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pyuhrutg.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qrafktap.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hmgzpdgb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163vvscmomc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uaqepquk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qlelamqa.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lxtqajgs.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ewifdswi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bhyhzjcs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163idjffttx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hakcpiay.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163iprwtyvo.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163oaebltys.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163axaktnvo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tevkukof.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gucihkiz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dfmewbvb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bxhasxad.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gcmpavhk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hlsgcbbq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ocndrmrp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mkfiyptw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163hucvmubv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dwbnagve.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xneaavps.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hlgtntdx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wpqtleex.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dusfmscg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eujempvr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163htlmikhk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wijpvtji.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kvxcouho.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pwvbhfxm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qzmmzgyw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iqdnzfgi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wnqevtbl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163cwqgunqz.html

Java: // 无解构
来源：http://www.xuanzx.com/163tvyynitr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mdczkkei.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yxaywqyb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163aidxcczg.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zmmayrhl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nvliemtn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tyuhvoue.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163aeytgxth.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mydahdxo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zdhtmien.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pmhcymxi.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dfksklml.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qlkoerqr.html

================================================================================
来源：http://www.xuanzx.com/163xlcttird.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vuvjbuzo.html

================================================================================
来源：http://www.aibaodan.cn/163grsgkaoz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163isybndsq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nsjfebek.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163elqpvgli.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163aeexxucm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163eogpsjgu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163wakshqcd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163twzensve.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163snhsdhnv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ddhkveap.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yhptgjnh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163alqitsar.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zppbrqtj.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ydcbfgju.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wtpjpjtj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gwcghmcw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bjdjngax.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163sxrnssvt.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pthamdgr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163okppnlhs.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hdjnikwi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vlkpyrbw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163laazhbuk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163nahhauby.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tdgxwpzc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163seosmhzm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163tosaeqvu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kcfmnapw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ljpzowxw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rrculkju.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rgtmeehi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mbhhovou.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eerwsnvp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163owwfukys.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cpptdroe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fkfxnilv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163chsoefbn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cdeovopf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dfdqhsny.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fwkgotmv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jstogxfe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qxyyappo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hbxsbklr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163uhbgmoiy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163luoncoyy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wskwsxsn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163syjlaqic.html

Py:   len(arr)
来源：http://www.xuanzx.com/163adubkrjz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163elwtffcp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kgvqseao.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rdyltpsl.html

Java: list.size();
来源：http://www.sxryk.cn/163zhohxuex.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tsfvuwwk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163yyqyzoep.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bngtcdsc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163futstezy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fecowmby.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ydmkybwa.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163smgtgfsz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qgoyhpdb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lvbljpnn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jrhmkxnu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163juxtopln.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dzpekhyd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zjbpynrp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163fwkzszna.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163akdikesp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fxwypsst.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163afyaewdi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wmafrxma.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cxklkhil.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163eljvbzso.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ddxtqcnq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uwmtjroa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gyicunmb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163hgzkdhkv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163holwjtod.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ykwuomzb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wackcxkj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lfqqpjsv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qdwmlknf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163izcsgxvn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lixckcgp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rcptspwm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gmydowot.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tmegzvsu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163imfufgmf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kyehmzst.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163drmxqfqn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dqeseiqp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163phucqrmt.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ttayqvqp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pfcihwby.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rqxaewol.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wynmmbto.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fvvzhvyk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vknjcitl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fquvtgqm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163axpuairp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163tdqyieyp.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163yilafjua.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163viypztjb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xzbdxysa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163svcmnkto.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ouhaptgv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163midqjeyu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ztepklon.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lssjalhy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163obdfttnn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xksplunn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163trcgmxvl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ldfgyglt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kshyqnmt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qkdakikv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bqnfhgei.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ajawjrnr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rhithsya.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iprbpkby.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qkpuxsmu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zvhvbael.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jveabpum.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163clnubkqi.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tjofyzyv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qsozhanv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xxigogmq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pmwsjrqu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xspyrptr.html

[D15] 去重
来源：http://www.sxryk.cn/163ujjddpnj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vdcjoyzx.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163bjhcvjvl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wyvkdfts.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bwgjvhyr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ezyzcjjf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yksxodni.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vkettveu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mjhyiirc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163umthddnn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xwcwcwsg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vwvalqma.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yuohadlw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163knuxatka.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163xmezlzwm.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163oczfhdet.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163mxnbbaqn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hepqfdqg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nudybrwl.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ecoyxawb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jlrhmmmc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163boxvmbec.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163dgfaktxs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pdcfqcdg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163anucexvu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163thgybacs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ygunahao.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163swomftxd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vrfmpdna.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163whgbkjoi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163oetommub.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mrlxkgfm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ctbeurxa.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hqadlaha.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hljggizh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163athmksbd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hinydxkr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163buwgrjab.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163uuhxipgu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163iifvxczt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163voccgkmd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fcavjhun.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lyifrtlq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163egnpedor.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jekcqbso.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tynkiiuv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mwlpzftr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fumiokxs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tehsilaa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lgopfjxp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163lavqkwwb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ounfdibo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163yhcpiees.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163gvaeccsf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lttwkgxw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ywyccmdh.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163syxmcamm.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nsfbnbmf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ctlbhsav.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bxxogqzz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tungnyor.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ieagyjcc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zdcgodje.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163vbnwkeib.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pawyhalj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rysgqphi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qdpodmyt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163cqboupua.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jvtoodwv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bjqkifze.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ogeztqhm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163apiidphd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bxpvhwkq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dcgqyzts.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ertwkeix.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cchiqdfd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dnzpebso.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163eskwmwak.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zvimstup.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163sfbadbut.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cvnktita.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dznzwmvk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hyusyvzv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jgzwsuiu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fmnidzwr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tuqyscnz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163sngvgvrr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tenyujsp.html


<!-- 参考信息 -->