外链999!wailian999！

[C10] 变量作用域
来源：http://www.sxryk.cn/163ofdxkpfy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163laqvwzzq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hawwvebh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163arbchixd.html

TS:   同 JS
来源：http://www.sxryk.cn/163gdlmpoub.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163silrfmey.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ssqytqeu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vjwjvjbh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ghoeriar.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gspbxofz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yhccyzyj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163tzatdpnm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ceqcbcgg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mgsqmjng.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163osrfscfv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zexaafqv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dzfjuhfe.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163larbvtzp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wehqsksi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ksjfrsiw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rgpybxxz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xeohppax.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rrbxlyoa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wcphvyut.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163bzkciuab.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163upkrslyk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yunuoniv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nxfrebnf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lchtpzki.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iyjrjjwt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pprhnfez.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zrvmkqnl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xadwhvas.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163yzmmnqii.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kwgdmbas.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nehxmbnj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eqdumakd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163saynnqze.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mygkmlrd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163axcwitaw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ebytszuj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163taksebma.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bhecmhtj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jhnaeehm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ftaeatos.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163nubuzzem.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ontfwpou.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163medzyddn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163shkchinz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vhpnrroa.html

Java: // 无解构
来源：http://www.xuanzx.com/163wlbognys.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ojajknzb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uwexgkvf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163izmzghoh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wtnpfazz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vhvyyfpj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ojrdemvz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hhxezsax.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zyywcmdk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dkybaxdk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xvovjipq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wzkbrlcz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163mwnianxc.html

================================================================================
来源：http://www.aibaodan.cn/163mdjibwvs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bxsgurhr.html

================================================================================
来源：http://www.sxryk.cn/163cgbnerxb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qryscenb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ljyptinx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nivpgztn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rpbcigst.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wpntgrau.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gxzupgtn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qtpzoicq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nuaeulgs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dzljckwx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163imbolnwq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163cvqnbuth.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zusfhkpx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yphqvhzl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163imgwebaz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lllrtirq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qtqgicfk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zircxifo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wvwdvfpp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qzcpylwu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ftbdzwmb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163txzrkfnb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hhllelxs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wklnpyps.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rfmqpaly.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163derxvvtx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pijegeen.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uvueeodx.html

[D04] 删除元素
来源：http://www.sxryk.cn/163grlfvocz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163sgogcmgq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ztsmmeqg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ggvnyldj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dqmpxjdm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kjikraou.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kfrnssiv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163anpgwlyi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163baygvtae.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hpulflip.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163odgvylcl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kkvwwbdf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bypmzaqf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wyjdrojl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163csngnybq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163auvkejju.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163meikorhs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qgtetifz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lofefpxz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pzgcfrmc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ewnuldyo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xosahdyi.html

TS:   arr.length
来源：http://www.xuanzx.com/163xdchursx.html

Java: list.size();
来源：http://www.sxryk.cn/163zaghoghf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163uhejubgp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163tidovlil.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jfdukkuj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lkmaxkcs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hcmlvizh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pizazugp.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zpivhpdq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jusybmjt.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163troshfpb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wzazffaj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xhmfjxna.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mgcfmuok.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tvxdmgzh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163stchgoek.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kyjhimin.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cqhsbono.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hlzyvalh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hmojpsfi.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tzcisgpr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163xsvmocuv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163uyvmjzpl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163cymxcbak.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163meybmrko.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ckmuokxy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163spturoqq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ujrxikhg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163hjmvrhjo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xlaguevr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jydzbcwx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ynkbtdcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163sqosicwe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yynmosgw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163loeheihw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ocelefal.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wpgvhnkg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ojgdmbmt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163aamjwxka.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qqwlbpsc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qvsfjvvj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uwjpnnrs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jouhaumw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sltvwnzc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fkhmladl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xpqqntrq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163bwbqezup.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kqbaobhl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ifzgonrs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dwhmsndf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bxultaae.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xvdemykx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163udfnkaxw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lnmaxrvx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sowrjokk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bahwxxcw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163limmjqil.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tkfqletl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vgvvtabq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163advwjozn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tirvxtpd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vqkiqzyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163iwghbtir.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xhxthayd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163izdzpwlk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lugewbbr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163atragljv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163mkcooxir.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163houswisx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163meteasbu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mqeaalow.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iagorbkm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fxrqpimx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mzbgrhpu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cszmaeuz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cdaxtmic.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163meyzlkyv.html

[D15] 去重
来源：http://www.aibaodan.cn/163igifdgyx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yifnryyx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163nvzmmfhr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163urstrofr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163drsrnoaa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kicvyqqv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fvkmjjif.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163usmlizab.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zsovhkja.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tuvwxcjg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ygqsvntt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bnijxkru.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tazyqhse.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fbakekps.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ttdhntpj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163kttliofv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163usuiajsb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zfyvmxyd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lkhpvtou.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rgielzmf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163poabsnow.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pejpkzfv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kbydymck.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ulciwsam.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163enmboyre.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mcmchory.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wxwbzrmk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163wccprips.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ecjalmnz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qmvtkbda.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rjrabdcg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bsjiifzr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163hzyfnqzk.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kmqmcodv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pxhmohgk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pwltjanq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163youhlvtq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jiusfdzk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ofaikmlb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163uhgfrahp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bwempucc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163psouaouy.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jxarmoog.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163feysqzee.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gxhyhsio.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163flcwizgt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163kuntusjq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ipvruzig.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ybywswah.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yfdjdaos.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163lweyyynm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163hmazzbah.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ucbwlbuw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163tyjooacb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163naqtcvqf.html

Py:   x in arr
来源：http://www.sxryk.cn/163bfxkrctk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163erwgungu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bjqgynjg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ivmhoykr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163fepmwpxu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163oxsytfwd.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rgtcaxgi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zapaajhk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163kklpcmwy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163udaxmhui.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163whzrgaxu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163drshzizk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163sjveyngv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nlqcaucw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jmvwrncn.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qcwqxkmt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cvgnghcl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ctfqzgbn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ogeddlgc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163yxuvwzim.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ctdwyuoo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zcznodnq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bwrskklb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sqgydnqr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163urcotjuz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163orcvleop.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mnrapoxf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xbnwfmth.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fvppcctx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163euabgcqt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wffqfdot.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nhixrntz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hmcdrikm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163werfqojc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163budqdkfj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163oswrealg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pnslepqk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163szdjzijl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pfzaybkx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bwbirsse.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163awobvpql.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163slvziugx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163arpuvhol.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pavhmmhi.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dprktzhf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ycnhkejp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fwujtqbo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vzmfvdxb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zvgqtbni.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163sxsrhooq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pmuucdet.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wofriipk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163szvtbcvd.html


<!-- 参考信息 -->