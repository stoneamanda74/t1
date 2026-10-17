外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163eatkassb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wqfsdsbf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uhbuiddk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163evvwnyoq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163wwdzuwdd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rfysnslr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163byxtjsjl.html

[C09] 递归
来源：http://www.aibaodan.cn/163yysgzspk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ogqyvapc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tgnouqax.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ausbmsmv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163imgwsfci.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ldwjrfde.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bagxaurc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163paawikro.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vdcktzfy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zuthmsjg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163objtmfhi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hvextnut.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163spnwvsvg.html

TS:   同 JS
来源：http://www.sxryk.cn/163loqnhuun.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dgrmbwxh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bddxmhzi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wyoxrwma.html

C#:   块级作用域
来源：http://www.sxryk.cn/163envrmobh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wqzuxxra.html

Py:   from module import func
来源：http://www.aibaodan.cn/163exzhrdae.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kjfoobqa.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163oxwaemdf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163veyyvwmv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hgyqcjdy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nwuwkeqt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163vemdmhyt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lfyurudg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163osgcujna.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jtmxocvk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163whhttauq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163svbrtodz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163okcvsgct.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163muovmsax.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jufwlyon.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fdovzcvi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dkjedify.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mltczoui.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163avqmwxjd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ohsbgzmw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uyxnqrnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xuuorztk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uvcjizkh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wkntbjse.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163buhkdaxm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lwezbycg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163quwmfnzt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163yoldykiu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gecnireh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dhllkuzp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fmbdeyqu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yqoyqaam.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163habzuicn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jjbjawce.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lcxoouuh.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163kbgwuczn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wzoxjjkk.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mwyeuajp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fsrkcfud.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163rojsnazj.html

Java: // 无解构
来源：http://www.sxryk.cn/163eolpxajl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163iollbanf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kvqrguva.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163mipkzdjc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163dnyuhdul.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ymcpxhdn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pbhdewyx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mliasosy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fsmpabfo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ffnumdkb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163avoicoha.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163fghdpire.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wflmkuuv.html

================================================================================
来源：http://www.sxryk.cn/163zqaspezw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ihhfukpc.html

================================================================================
来源：http://www.sxryk.cn/163svpzvuow.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ylcgianb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wywrsawi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vgzdxduu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bwxhfpun.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zdagenjb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tqjlwgko.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gtgcsalf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ncubddiy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163igzlveve.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vckrugim.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vghjaajj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fnaydojz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163oaruqgwa.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wxeyfkpm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vgbibwkr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163oiivfbpf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xstkdlsu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163fmfescug.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163rpwgajzp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dbpiedtg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gvnzjwsw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163okdjxvhs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163otlcdskz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bgfojkyh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163otwdnqiz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163cziedjjf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163slilbozu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163abahvxtz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zmoisonc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rcylwyut.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ajgowpph.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dlmhjfoi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wpqwbrcp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163maejhaec.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xsngxqgj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163cwvayysy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ibdlrwmx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lpzpfcbn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vkveiieq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lihrcpxe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163plzbgvux.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163pxtcgsao.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ymzhijjl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qvkgsron.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163hlxgsqqu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vrpplfch.html

Py:   len(arr)
来源：http://www.xuanzx.com/163frxxmpmr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163poorrecz.html

JS:   arr.length
来源：http://www.sxryk.cn/163jrzgnhid.html

TS:   arr.length
来源：http://www.xuanzx.com/163mpgwbzso.html

Java: list.size();
来源：http://www.aibaodan.cn/163gwygdzyh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163gowkrhtv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bxeukkzu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bovevqcc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iiumckyb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xnhmvhro.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tfjenfqt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cwdcdzfs.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zawleysd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163umhhwine.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pgzeuxyh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jzemxbog.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nfnsjivo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nheubdkr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ogxzkjpj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163brapgxvi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163djdrbbtl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163eaosapyn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zqwtowge.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163drdpthdr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jtdnljum.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pmgmzmgn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bbtchypl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163frmigkbb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163csivvojf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hrvelhid.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163sxanjfem.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gczzeeqa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163okapmajw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pdzddabu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wbujmuie.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ayaubryz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gsplynqu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cpgfyjwf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tcowfjxs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ysclqusa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dmluacez.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kwigstej.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163irnqdrip.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163hzmydktt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mejovkvz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nvipshue.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wkpbqkzx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163qmaxqzeh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163aroufvyw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sxjbwpow.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lrqumdbd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gpnushew.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wsasetqx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tdaipbke.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ajrbnpto.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163cecejfyh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oenaeako.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rbgbobvs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163heqiljkn.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163luvwqppp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jlnwfnot.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yxmjxtfi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qqfjrjpc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163kkcvptcq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jtmgawcu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mztshugx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163favekrhd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163oldhpujn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ynebkgqu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163sdhkbzwq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kpyanxdg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qxnboqni.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tpovducj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163iiccaojk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163btiwkucj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fpptbgaj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ixqbwnfl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163emzysvrt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yhypcgoo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ymdyrvdk.html

[D15] 去重
来源：http://www.aibaodan.cn/163xkaoiqai.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bersxvko.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mkzzczmt.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iazujfrf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xlqtmqjm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163uiubgaew.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qaciifzb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xujkzubf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163exnevody.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163amgreedm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ldyezdgc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cyqldtsh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fbufzztq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ehpdwvhl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yrcfrvxb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163amrsdivi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nkmtzvca.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jobkuhnl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tmyiryur.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ddfquxks.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163eqzrposb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ptgitajo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rkckyjbk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ydniexyq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jrmpcznj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163scmreslb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fwrodqhq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zxumfrow.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163jtlydnre.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163biujoasd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xtszfibd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ggtzwvqh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tsaztmre.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yfoeuuem.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mxwywbei.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cqugfbep.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rhoeahgf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sjcjiais.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mmxsypkf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mktjacqs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zajsmbkn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cbldepjb.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163npoxwkao.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xdrlekup.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xxudzaod.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163faelvxhi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kpthzpcx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cjzfgqzm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qbuohiec.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ajcobwaf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kgqexjmg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vkhafycx.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163uwyihqgo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163yyzeisaa.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rgykebwz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pbcauqvm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163eboorvlt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163unlepcad.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sybogvgh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qnneefvw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163aavjpygs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wlguzjqm.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rkxbniko.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kgsduoll.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ifldywmf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163uoxkxoyk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bymgcmip.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rshwcskr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hgxlpxlw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rmsbuvpl.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ekcvnoji.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163sksiyteu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163invachmj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jecrrwon.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cvuzjfmr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ekfbrhfo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gbeyitos.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nklgnizn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mmgrbvmp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163geljanjd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jhbtgtoo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hbwcyfte.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ubjfvziw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qixdnohm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163bdgazujc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163diuzvkbe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tfwttggh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lskdumdg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mkgrxkcs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rpshzzum.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bcvjvdap.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163awtqnxyp.html


<!-- 参考信息 -->