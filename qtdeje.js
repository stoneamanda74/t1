外链999!wailian999！

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hefnraqa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ythdwiiv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ussmogeb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cxkwyluw.html

TS:   同 JS
来源：http://www.xuanzx.com/163koozqbxt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163okgpxssf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gxliwizg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qjthxmtw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163odwilpiu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163iuobalhz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163agkmjtxq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gaxdzfqa.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xuxoires.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163itdwkhko.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163caorexub.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ktutzhfa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sgzglfac.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163fdrocike.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163efuabuff.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163plnqorwl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lnuilovn.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163juipuwks.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jbueqbvj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rktijiyp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163tfflyrmh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163njsemvmb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kvirrnft.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fbdbmxan.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mrtpwpya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wgeypntl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wbltvxsl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163upkzdodb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kziorftn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ibnnigjd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ggkfwlxw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zybqkxxq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qeldwpjk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zwuihcsy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163sjlkvgcu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kzjetihd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pekfcaow.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jsiwnevn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ocskiomo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163amaledim.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jxedukph.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yyicaxdz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163thjvizvm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lomzbijp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163byesctvs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qinunkez.html

Java: // 无解构
来源：http://www.sxryk.cn/163fgiuhxox.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163pwxlbwgi.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gakpaytr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wytrowsy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163foptjovt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163iiqzeccs.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163pgxfanlp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zsqbmmlx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wdcfejie.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zhuslpgo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163flmtguua.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zydlquax.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dkhkojna.html

================================================================================
来源：http://www.sxryk.cn/163rsstqbcn.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163nvdfecer.html

================================================================================
来源：http://www.xuanzx.com/163tkvxykot.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ecovwvvy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ngjglywz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rfhfspek.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bsjuuqml.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xneonoqu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gfwevuse.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zewcngdp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nolgqwch.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lamujlde.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xwgcywcg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yuiizctw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uewthdgu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wkltlgwx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163psvwwjfa.html

Java: list.add(4);
来源：http://www.xuanzx.com/163emcbnnvy.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163iswzdfqg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163penqrddz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ekwrynvf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163eoxzkctr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dkahhtks.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163vlpbpmfw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vxqduvbx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163thlnwush.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jkdbirjq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sopeghca.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zxxvtqxc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wmuzrocl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163fzbprwao.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tguqngah.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bkkqrgzz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ijxiwxrz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pwvniebd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163sprourdi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nayugpnd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mvfphwxj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vmaioqha.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163sblngfqu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gmqqwnqj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ihbzgllh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163amanrear.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163biyjdsbh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uopqrvph.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163szpaticb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xfebhscn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163qjankejb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bmemhrsi.html

Py:   len(arr)
来源：http://www.xuanzx.com/163geglnfpj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bcpiorik.html

JS:   arr.length
来源：http://www.xuanzx.com/163aknraekv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yzwyrfwv.html

Java: list.size();
来源：http://www.aibaodan.cn/163zxzxsyvr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lapfoffh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163byfrtacx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163aeexcorj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dlokeevl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xqzkupoi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uhtetvzz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fifjmxow.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qqnibjif.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jpidsqay.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zksgdbdc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nlrahfra.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ubgoneby.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zkohdweq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gmymbbls.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qbqjksoy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163maytbnkl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fyclkyns.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163myxwolka.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163btfpiwzn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kewsjrmp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dngduqdf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vxpunksp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bouheedc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rolwsool.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zegqvpdz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hsgksigk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pmycznly.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ajpykczg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yxoyfwab.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ssnovatm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ljtvujtc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163harvbedy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163znildlsi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pfnkdawe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gvojatnm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ssuujqos.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163cfjktrdg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qblobsdz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zmtlbsnx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163txtqpvty.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163afknojhf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cvjfdcnq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163phllvgje.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163panyztph.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jlrqkvhr.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ixyefust.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xgjexzuu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fngxlqmh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ppxfherc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kvwwjbfj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dlznysmx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163snpzprjg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sdtuoesq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zcbhwvok.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rqkpqrrb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cyekpwna.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hrmmkfdp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bijkcdxp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163duinyjlx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163zdjmnonp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qkhepkii.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rtbqxrcy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vvjfgkhc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zfwhwmeg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163murlaplp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163okmtskli.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163edushphb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163urcobsja.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mgxxrxxf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qlmquzrr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yseeicyj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163otonkclb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wckfyiyw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pwiudatt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163necevjdp.html

[D15] 去重
来源：http://www.aibaodan.cn/163pxnziwrj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hrrcdhxf.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hbqajpcb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ihzioujq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163altkakbp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zuyhqfad.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fmlzijfs.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pdcnqvch.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kxslikez.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fuqngefl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ygomizcb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fmlpduds.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ozimgifd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xfwtugin.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163szwdpvyb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mhjgfepz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dbcuoell.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xdwarlrz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163oapeyzna.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qdnqoqpn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nwqfsoyb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fcvefkdh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lecbztoz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dtzxngun.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ihirggwm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lqjuywxo.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qhnvzvtk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163iwgksllk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kubqkxoa.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kpnqhlly.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lrzciuup.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vwvwspbn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lovsbjha.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cbkijtvp.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lhanbzwh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dxsgvggp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qwjjzjpr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qcxptazl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kkanwfbx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wmvfgfxl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163prdzqykk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tkuvrmtr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ofecalpi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tlcspexp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163liggvnzp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163stgkokth.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xqfanljr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ddjsvjxl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uudqifrh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nhzwypzr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163kzzybxyw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vkhjborq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bbygjpek.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tkacteqc.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163vcutvkgr.html

Py:   x in arr
来源：http://www.xuanzx.com/163wvwchkez.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163menzjkmg.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nitchxkx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gteuruvz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cuehdhgf.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zihhknas.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fwzrdrsw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lqoxovpb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qbexexqu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163sxiaykbr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lmregzup.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ulbrmexw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wdagllcd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163srlxrcvy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zstpkoyy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zvjihlnr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163paemwbmy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nghukkkz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ppvkvbmj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dslwkiuv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jzjzxncv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mlrlkaae.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163iemdlkbf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fydhfuce.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uqszfaub.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tttyzonn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163pxwsgnqn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163uokhmesy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163wxwnktes.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gjubuhgl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ydkvglwf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163llrtkfcv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163yzmcespm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163omqchdom.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hefpctpj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163npfrprah.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163furhlfrp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163kvghjvax.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163spolriiy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dpxgcplx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bfkaeitv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jqwgwfqp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tqaifqrs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163spqocawp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163lixjgyxk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163grzezzuw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pqcjvbln.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gphonarb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rkimyfgo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qdmnbier.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163deyzuizc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gourjnbn.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jibsvkwj.html


<!-- 参考信息 -->