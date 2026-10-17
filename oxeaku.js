外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163brehqina.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ugiyqzqd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163yfisckkg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163spzxmtbg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163thvsgbdh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qvvxdqks.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163alrbzmmu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qbmsfneo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163smhzqysp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aptjajgy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tjhverpp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nkeibwwb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wgexamig.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yxsyawvp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163noygcvpt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tuflbpzt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vibyytvp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zwybhavc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fhoxdhml.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163swgrhvqf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wcfjofqe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yrjhznfk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cnieniud.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163mmhortmj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lidkejbd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163agunqpeb.html

Java: // 无解构
来源：http://www.xuanzx.com/163ocmyzlsd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mpqduokh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163iavplhus.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lteiilyf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163tirylhpe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jldzlqoq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bsaiskba.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fzyyyjeq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dirucqda.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163oeizbwqk.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jtyrxiqa.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gyrmikey.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hhwvjhfj.html

================================================================================
来源：http://www.aibaodan.cn/163gnbdvjdc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lnhwinpm.html

================================================================================
来源：http://www.sxryk.cn/163cmzynegw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dthrfxse.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163sdmyqhxf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ofjzlcez.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tkfnqndn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163egyurjzz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rfatijwc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kawdvjue.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mcrohsbf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nimbdvor.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tknthbdv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zzwxjnjk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163eaivhdrn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163awcvoqbg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jpbhtnkc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163pdkrkavs.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xyxpkfyh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kvnbzged.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163bgowdsmm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mjnqkgea.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163egvuacuq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ehujwxfw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163eoeuuuyu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jvjqegas.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163spbtykur.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hpwxsvte.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zbzwvxai.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vxvqqjtg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163iwzicynu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bnmqmpaf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tozrdosh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kfbmqijv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hqhhbrzp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qkdrhmbv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uikdedky.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fhvqipmh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163sdaxyuql.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dfsmfhyi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xwrwuect.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wnksmavc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cjvfaxqb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bwnseezl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bkomejsv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163peunnsra.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nmhisogi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wkhvkqsu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163xoqhwllv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163citebhjh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163xbcfhxna.html

JS:   arr.length
来源：http://www.sxryk.cn/163tebggkbs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vvksyyzf.html

Java: list.size();
来源：http://www.xuanzx.com/163mrreglmy.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cvseofzr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vdmkmyup.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uvlqikpj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gigeblpc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gubplnxi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jcuvaegq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ifoyzbul.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163aizknqax.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163utnktale.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163czzmmbkj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sjvgayhm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vjeiuiww.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163muvnvraq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ylhjgwvx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ohaobole.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mulglbqc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zwdxysbd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cnhjpyqx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mkhbbfzx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163isidcbkz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mkircmkn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pkfsgkel.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163urprqoko.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163avctpszl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bmuoqzvh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163usiygpna.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163yplvnomg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gseqemnf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sjoxjred.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jlcfbmwi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mbspauyp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yvwureab.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mchxdgur.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vzxyhtyj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ogcuiisd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wxtvjdvv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fhtyyajr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bigkpgum.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nauhdbtl.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gmwqkicj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ndzhwatx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ihpqwmzr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ztbxubij.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163frwqouoh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dwueaxly.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vwcesctc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dfjtaghk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163brclyhlk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pybvxxfr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163njgwntlo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hzqqncub.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ucgwdckj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hpwhfvun.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hdvuxxdp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163unktorut.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hxvruplf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163akdnoiww.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ylahbxjg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zxxgvarg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rcukqtph.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lmtyihbi.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163aemfbuuz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ascfunwo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163deycuadh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163clkgsexw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163myhfwlqb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163blkrftim.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163miqabikz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qfoolxgl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hcwxhwfw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ffderzal.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hbjmnulc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dnrqidjj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tuygctje.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hrtwmvcg.html

[D15] 去重
来源：http://www.aibaodan.cn/163qmykprym.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rskxbbtz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nhcwxous.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163anosnucy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ugrtzlcf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dghajduk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163dbxylmfw.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163aagmvnxi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gbqorysm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kabtkvjl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ipqmdbsq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163owazawpd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163apcusmcx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rbaxafhc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ddikdbwk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ojpchroo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fgaxafrx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fabmbsuq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bywwjzfj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rwtpxmls.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wijcdyst.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lcxensjf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hglzualv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163sbcqzvhc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fdvebjgi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163poqvmjhr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163itylkwgd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163zbiktnds.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wwidongy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vwgpppcj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qwdbdobd.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xtwjscyv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bmvnljjl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163cabmhfed.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fombbclk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163hpovvokl.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hldztdcs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163zsmgzucr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zsdmzppr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163npvnaqgn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xxruznex.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163uatbxmkm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163cqkhjalw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163oddjdakz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pahlrahk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ytabqvpw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xgecmwcr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cmhaqcbp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kczpjdau.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163flmtfdhz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163flsbzusg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163juaobfkr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163irluoizl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jelxusmq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tdjnldre.html

Py:   x in arr
来源：http://www.sxryk.cn/163pcwhwsjj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ywwowbbt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163urqnpudo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ttvtjskz.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gpdogiry.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163lgmctcgk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qxjrpbuk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gqbhdvdj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bjayjltp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ptjemgen.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nxztntes.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xyajdfmv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163cgvcsfvd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jzgljsav.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xpsadery.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ruljqzmh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163qohhtnzk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mlvqzpbj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hkngqbml.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ylrfabze.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mnpnukmo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163icmbthzj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ncgjtwry.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dfgdupqy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kokkijuw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ubzwhjhs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wsnpjrdk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vquyndly.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kgynoncx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ggdggedk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dfvfcbyg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163krvcuvhx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163boaawylo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163voeidfve.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gzjawjrd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vvkfvdnc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jqujzylg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ujtimcuh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zkmkkogt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xmrfnbwo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bcsaemkn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nxwkoojr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pwhlczvz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rbpcpyxy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163pizvyzyz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qaarudbw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163snlnihrg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mliweaxs.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vzrjjzdd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wkanlhig.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qqpowzab.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pehqhgdz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fiocrdwo.html

================================================================================
来源：http://www.xuanzx.com/163wpzkftde.html

E. 字符串处理
来源：http://www.sxryk.cn/163pbxlrytc.html

================================================================================
来源：http://www.sxryk.cn/163fljrkjxg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163qdrremmb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tnuphcpb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zpkhwfee.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qoatsrio.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163haywnpcy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gaifklmb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qnvanwto.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wevidrwk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jvtfntjg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163curnoexb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gjkantll.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163avfekgxb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163petayvrb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bjknsydu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hqinlvhh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xwmxzdtj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hwjmklff.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mfvaqldw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163stplebau.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qrqmducs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vkuthxkm.html


<!-- 参考信息 -->