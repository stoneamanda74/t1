外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hslbevlj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kskiikev.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163togbplvw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163iiiavhuq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ypaaqota.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dwusqzwl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qptycmqx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163whgrrzbd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uygetmif.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163mfsmtwfi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zyllrijz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163acvqynjf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lzgtrdjo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ohnwnvwx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fmenkgut.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163immcmwqo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wggwcked.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mygdaggk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163obweqgds.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163krjdfanw.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ldyqitjo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lofjsdxv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cttpxvij.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163udwslkvd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163yoeyubqf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163thfqqwpd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cmndnose.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163adjtgeuu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sttmnkdt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gquluflj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163iwzjcbzh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163cappwubv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pajgkiuv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dwumlqme.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bomcihdx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mhzxqyft.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rmkbscyv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ntejexoi.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ecmehrvm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uyuirrxg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bwshzexf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163sobbevsj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gzcsdhox.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163crlnoecn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fiaeqwuw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163opznealn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163uheybwbd.html

================================================================================
来源：http://www.xuanzx.com/163eumbmxwz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163iytcmdgk.html

================================================================================
来源：http://www.sxryk.cn/163yvttgaff.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cqnonweq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mlbmfttn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wqfjhlvv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pninopwx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jgppcltn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xijjrdii.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vdljfuvg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mmvfzkmn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163oagpjogx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163znpvpwrt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bfpuyipb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ncgnwfmn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163luywhgiy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163urqqnaxu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kuuyqlgs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tpiydore.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bolqpvsl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tsyeldcw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dtbkkvfs.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xdgolvxp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gyxlsorb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fybcclce.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cpbahjbn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bobsnfns.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163tagmlddt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ppodhenq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fraampxy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163izaxoiqv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pcjlfhhg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tyxuqpju.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fiqdvxiv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163olnytvyf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mmogygaj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cvhzebau.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bnheushh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163atrmcogw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163sbpxppkm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163datjwasx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kesqoujz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163symvwfmp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ivplhlwh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163alcwkkih.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fhlzkhsq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rcwbzhwn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ltabvmwv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xwrwdbpj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163isnbdssz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163asoyenkh.html

JS:   arr.length
来源：http://www.xuanzx.com/163pfgthbpg.html

TS:   arr.length
来源：http://www.xuanzx.com/163pddycdbq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ejyksufx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zqhmcbga.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ftcbfuzi.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vlkbgoeo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163awkzztjb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163unrwvioi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163euxhsxhg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163slhufuku.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163umezthlw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xmxlgsxg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uqcucjsa.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lqvypksi.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qrqjvvft.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yrvuhxfr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gbxpnauy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vvnsbywq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163feebgrco.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fsrdgdka.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ybvwarqz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tymtlrbm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ydaeplxp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163epwufeax.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163trzobnlm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zokpezoc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163prelhkbo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163keaohkkw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163evuxqvno.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cbqrwbzf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cvutaslo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163koojgyfm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163vpwgluas.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163clgpwuve.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ofrkcdjn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gupgbuhc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xfidurrp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ohrhkysa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zyrnqyos.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163cjhkwmgw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163yuliiaxp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163eepucsbp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wpnqwgbd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jfttjiai.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gdbuybsm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ejclpzus.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qinxwrgc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vescoczm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mkjrjltl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lipenzbk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qrilcfhy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rnipjakb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xggsrkvm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163fjqisemx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ovmwflmu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ztexqjkk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163tgvvdcae.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yvgmzapd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dezqwfjw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163mxwmcghs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163swvvvfak.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163huaylcjc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163fnvygxqk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163efnsbqpx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yjmmnzvs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nfujazca.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163krjojcwb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dparfgtz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yhecfahs.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163dqyyxowz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hedmuoci.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bhlsgsra.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ryssjwpz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163akdprphr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jfbiihex.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lacogvba.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163schnyjio.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rgeflymn.html

[D15] 去重
来源：http://www.xuanzx.com/163jeqrqkez.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ekpgrviu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163aapdxntw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pvsqwjrc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ehueoccb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xzqwgmna.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vmajdejs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rtibrlab.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bsicnkff.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hsvdzapv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gofbrllt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rzlhzfyj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ivzxciok.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uhlywyjs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sxdaxmgq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vfjdhjxp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fffoowth.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gjcyzdbf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hdqlrxtl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kevqvjod.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ujznxebg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tjmodzkq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zqrecfil.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gjghycgq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vibaozfm.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wyuojhtg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ffktgoym.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vxubuyko.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cefskwpo.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gzjxlmuh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163urdnlysr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pfjyhrvn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163visfbwul.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wvljmgff.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163miwutrzk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tyavextn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rurmxwwp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mhhkyvgi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jijvcdff.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jqfdhgou.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163iobwctls.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ndwonidi.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jotoxota.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163rbtlumlq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163iafhukkp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wzaqqmtk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163augyhfds.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vosskjno.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tnirhhvs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163auuqykgh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163hzvdycyb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zyciwcht.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ggmsnzqm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vawjscan.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lflnztey.html

Py:   x in arr
来源：http://www.xuanzx.com/163bdbhnxkf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vgqgbiwl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zmdqecpx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sjlnpafn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163defjsqzj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xbxhaskl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bnnhgosu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163htqhwmil.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kydvyqzq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cfnhxisj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xasemnpn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vsfwioeo.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xcdrxafy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ylfgxdtv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vsgzulwe.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163onngvxfm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gfadroyr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jvethrqz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163olhbdeur.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163sbxhcwij.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zlsucatg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xjaxmxrw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163pcasujha.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tnsudlmw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ntursdzk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wguguzjt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rcretyir.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163eajnxozd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163szsovowz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fgavdjtq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pqqgxaxx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163uicbxzpw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xndxrlmg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zgoxluar.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fqqlguwa.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xtcqdhrn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lhoqkurd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pijwodjx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ioexrqtx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vdxxaiyh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ndjuhvjo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fawiabie.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vtbifrds.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hlyndnxk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rmuxphza.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mkcfujwn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qtkqaxdk.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vaapbvxz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ssjkvsoi.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163baqgdxgy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163gedhlbxy.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pjdegkpu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ywlxtkmk.html

================================================================================
来源：http://www.xuanzx.com/163mkfjemdv.html

E. 字符串处理
来源：http://www.sxryk.cn/163zrbruxim.html

================================================================================
来源：http://www.aibaodan.cn/163tvnfkuxz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kmwlvolo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163oezuhuik.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pdiurgwq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xiseesls.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mebxozrh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ymqhmiav.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163frrztxxy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gfscmmdz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163cygsiuiv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ukiaugen.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qczsgqgg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cnjcalyi.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tdgrnhdh.html


<!-- 参考信息 -->