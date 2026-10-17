外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gaajzxkk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163bggymiko.html

[C08] 闭包
来源：http://www.xuanzx.com/163fafowrcw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163sowwaagf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dbjkudty.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163anwcwque.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sltyjwno.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ihdfffad.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gdwhfobo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mleuobfl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dcenikpl.html

[C09] 递归
来源：http://www.sxryk.cn/163gpqrlxhd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163whwoezlb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163svhjodcr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xhflzlib.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wyajucox.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163sdxtmsep.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rrxueqla.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lmhlaoei.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xlevpwth.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hhdwwojf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fkhfytpk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163pmsiwuqa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wyxcuicq.html

TS:   同 JS
来源：http://www.xuanzx.com/163grvkgebf.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hyusdkue.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163animslcz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ymdfkvha.html

C#:   块级作用域
来源：http://www.sxryk.cn/163sugrkyag.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163bgsaxtin.html

Py:   from module import func
来源：http://www.sxryk.cn/163zvynsxbg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yfnldomd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fikwiave.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wibwhqsj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tgayuajv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163eepzmtmj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163clccikgc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qzcjnbca.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163itvtiasy.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hqjcrvaq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yxyjhqlj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tqebzrmy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kyeohsre.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163srlbjrfw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lhmypglp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163avcopijy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163sosppojx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163znketyvf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tokwxccs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163voytbxze.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163inlajqnc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163huoyyxpy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mcnxydrh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lcrlohzy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163omulijtc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lqnhyjdc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fzmqobzr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pfoewldo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rwgjymfp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sooklrtc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hesotdwj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tzmzkenp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163dvgxvgcn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qhnyiwqo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163aooezill.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163emxqgpul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fotsxido.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163iwbsnitx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163octfvkjh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ebsdpoww.html

Java: // 无解构
来源：http://www.sxryk.cn/163jbsymflo.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vamjnrgs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nvevsuur.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dpldimis.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163timzoows.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lemxergk.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163weszhytt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163erfkhohs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ivpllazo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163kodqrbsa.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nrqrklro.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dwgtlzuc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zlrfxqpc.html

================================================================================
来源：http://www.aibaodan.cn/163rcktljyg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jukdhxmp.html

================================================================================
来源：http://www.sxryk.cn/163xtjvgmsb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163inhrhlyn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163usxivboc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zkxkkuif.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kralxkvs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163okgwdwro.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uptywczx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163itpwsrow.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iwrbobpu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wmevwcbx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163eokejrmg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cncujqht.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ylmgpmpz.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xaffqqyr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bydfqqoy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pjohvihw.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nkbteboi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lqelykol.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zirugrct.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jxgjjder.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vluyjtsr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ftzkmrpx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wejxytyz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vhjrmeqd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qjfvheit.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nssyabvg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ncghqtwb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163snnnkvdy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163scbxjegw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wgawifsn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fhubblaz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163degrfwld.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163genkxivx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lffbdusa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hojjbuey.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wwhbijyj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163joxrztdy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gkommero.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uhodwhpq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cuelrywg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rgikdyzv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xwzxfaze.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163xzsvlinq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bcksjnfh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yecshnmf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163keiqcqoa.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ttniexyb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163sidxbrtp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ksoeopxm.html

JS:   arr.length
来源：http://www.sxryk.cn/163wquojuur.html

TS:   arr.length
来源：http://www.sxryk.cn/163kzrptcft.html

Java: list.size();
来源：http://www.xuanzx.com/163dzqsywqy.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aojbajcw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kqfujekz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163twzkorsc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jmuvuarm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hgkubkos.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mnnkecaq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tawnqrfq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dwzxqtfg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jlxrveyw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ciibovrf.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yohtxuyo.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tbpqzwil.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tlrnepdv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qegmmays.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bwptbqlg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wcfpkvgt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163pmwdzddv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rjqwohyj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gymvxsin.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163sukutezy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163dhqgyxiv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gwjdxorn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pokqjzkg.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rltkxmpg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163yrzaubmg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163majvgpxs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163uuzpraju.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ggamtcds.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cdxwysgs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qxoptygi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wixspfak.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163thjcorsa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163iikgevuu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163splitzze.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qraxkdpf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cgwsmyhf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163isfvlyds.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qjozcbsl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163klgzfulr.html

[D11] 反转数组
来源：http://www.xuanzx.com/163yyaoyosm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pzzukmqx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zaryzhxy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yoecjewk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163iwviiscc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bztdjovu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bjmaisgk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ylcujewp.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dcxuauar.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mrdbzqrj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rwetlyac.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qkophcjv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mkpdwagb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rutfjaxt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uleubyeu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163nhzwiuhs.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163aalcugps.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ydfqqucp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163usxcoktb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fyktaqbb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ktzdckkq.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ybndhzpk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gekzsrqs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ymsniwas.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163edksztsu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163tqicsokt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sdnsklvv.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wtyrvyij.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wyyskwlx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vkfktslg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163afqgimcm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163panedstv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sdbnfsvu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tndarfer.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qtepjtrb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ohvpqddt.html

[D15] 去重
来源：http://www.xuanzx.com/163azqsvfwj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qktfujwi.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163sazvtwql.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163onplwhlg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163emfxnlnr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wiporqlm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163afkfrilg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cpeqdhql.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163otufsgyc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pwfcygbn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rvoxbaop.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ywdhpscz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ozebdhpp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lswlodnk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163oeobwwwq.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rwllhusk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163flbwtzmv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mmmgcbxw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rccwfpfk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ftafikkz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cezbebti.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163cqnmugiv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hrjlgfds.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163olriuchc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ywobzgzh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uwwnxxme.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ratxebdy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zqgcefha.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163stszozdl.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163utztzsgz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ezdltohm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bqgktvjg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163akcfmhnf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pscwvnfu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rprjtcxl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pptmziiy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xizvmdyi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vnidcnqq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ganrzpnf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163aqguturb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vpfynrnr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163accdgqdp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ohlilbvn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zdxbfwib.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163obiiunpq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163djqowbyz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mglelbdg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163lmhiuyak.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qiwgdlyi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163blywmtcv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pwlaptcq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xxgodigc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163eifmfbdv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wevtcauz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kxvhambc.html

Py:   x in arr
来源：http://www.xuanzx.com/163pkejlxha.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nxztmzyq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dspiqwoh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163frlhyvpc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zmfylpgo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hbgruhob.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hlgxdybb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163whevnmmq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163lpzsdale.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xgynaepi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zutbqqsw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vjzaumnm.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ixjevekm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163whztyyov.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163cwymwpkn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ejraiwgt.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163erwhrpov.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ythpuyea.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mmmrbzpa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163heemousf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rxtyfzjm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pirmbqrm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dhcmaynr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163frsochdb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xidbdtkq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vhwdnvvg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ptxihguu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163svxxuyck.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vckvkdmz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mctomouy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163htmmrywo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xvxzrnoh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163mkvxjhmv.html


<!-- 参考信息 -->