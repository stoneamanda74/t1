外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xmfhetny.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ruonbzjy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xbzimxvx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ccfahrej.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xjcmbqtb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rxqnjrum.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tdzcmkpj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qpxrmgkm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kzwolpcz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mpnwhzrk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mpvvrdys.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sgckoeqo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163favwwswg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163sxziuphm.html

JS:   arr.length
来源：http://www.xuanzx.com/163oefuhpqg.html

TS:   arr.length
来源：http://www.aibaodan.cn/163prwzoocj.html

Java: list.size();
来源：http://www.aibaodan.cn/163dipweckq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163uhejewuk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xplpejzn.html

C#:   list.Count;
来源：http://www.xuanzx.com/163whdcbqxf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iumgtbrq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163etynjgmv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163srvylwbp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lqrkhxll.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vlkhkgje.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nelunmwq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163enyxsokt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fxikgboh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vltrdlmy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ovtymebk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dhwuugfc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ncpvdepe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163carwpmju.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yhchdbxy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cfhczsrv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163erqbcrbg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bepbgufu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163tnplnpzc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163sisuayzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uxdmaels.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xickgrry.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163crmqmbmr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163djwvuzpp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163uoojjuba.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163iebqmrlv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ffxgkcwh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163tzzfktzn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gdoedgnj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pyjqfrjr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163thihmqqu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jxppvswk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nghdwhct.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gtpnbobz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rhvjhrnr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dvkpvqok.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163glnowhlt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vcwcofgd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jfbjklqj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ljcqcqkx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163edwpkmjb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yglzwvuj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pakrpquo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ktgvvtbi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fnvjzllz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wbgpwvpr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wmboeira.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163gxmgevnz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jmgzxlkw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vkbibvmb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163chgfjzjt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yadigvku.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163mgyxdlrs.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163tkjnynpx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yjcgdikk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zjvwfgby.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ohhwxwln.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vxnvopnz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zdvtwypo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kqozmekf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hegsffcx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rcfuszcy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163nmshwueg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gbhaimmq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163aewbalvb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cqcsvrmw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163piugwwpa.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163khxojguc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yhthocnx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163miblhrqe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163flcbwynu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jdrlxute.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163efzqeomj.html

[D15] 去重
来源：http://www.aibaodan.cn/163avowshal.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jiestzee.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bgblxblf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163grvdoron.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163boaramtg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dkdbvmyy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163aktfdhcx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bkxmaiff.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rcqyihjt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163oqjxjqaw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pemniewt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xnufyxxk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jtoonppn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163eystwtjw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bfqayxaf.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zsadmwyj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zrgnhgtx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163omlzfomj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bzssvjvm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ausdgksk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jxxvsqaw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hymmfuyg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mbpdzhtu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xlivzzag.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ykqnyqgc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xgprpbvx.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ofvhyahc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qdmwqczz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bxbskfbr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lggcqdot.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163idwieznm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163biywleqv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vonolkai.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163zvewmugb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qusglvvu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163voemlkay.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163kotkswuw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163utvohbbe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tsgpsxjy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mhltxipr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zptppsdg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163amyywgwv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xssuvasu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nsgrmwll.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163npsnvizf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163onxifqbm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rgmtlcis.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kcoeunmy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fqzcdadl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ocpeakpg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ultbcbeh.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sarziozg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163obdyrnkr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163oxoolfjp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tmjlvlrr.html

Py:   x in arr
来源：http://www.sxryk.cn/163lhhfkkhb.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163omyiskzo.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163johfmvtx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163azzczgut.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163nljrppep.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163sjhlrgiy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sgazhmdq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163efsbaqeb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dggdshvg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cxpakqss.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163msmhjmdr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dtfolmai.html

TS:   [...arr];
来源：http://www.xuanzx.com/163uuefppqh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kpfpqgkc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nxkufenr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163agtsetje.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163amknagil.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zxddtpmg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yfihilcn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163euaznopb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163weddsskq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nmvojsyb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163msjmggpu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bwgpufir.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kxjlshwc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jtzaoeiq.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kvwsmnex.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163aghxssvi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jukqnvon.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hcutetqt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yyvcwtzw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zafxnjne.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163uvzjsred.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ooxoaamd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bpdvoyif.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zpggfpau.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dsrtnjtg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zaqjkzzx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yeimrkre.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bfjqjnze.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rllookvo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163kerinljc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kljvxpuy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hudgxkyy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xdfuzjlx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ahemfdji.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lmgxywkt.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jesyeuah.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dlentfbn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163azxsbdag.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kvokilwv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jfrsmyhp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163raxlxdqx.html

================================================================================
来源：http://www.sxryk.cn/163ymjzbyra.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fkidtboj.html

================================================================================
来源：http://www.aibaodan.cn/163fkmjtlnv.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163imlrngtx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163unboqhix.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jebvkxyj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xujxpiok.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163agnaqkmt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fivgcrwn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cgzsgpul.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qnlyrnmo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ijiassah.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163cygwbrxe.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163limfplca.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ipqsimig.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xpctrhao.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wzdbuywz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yitkwocj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zqlzppio.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vlmlwuxl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163agggcpme.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bdvuwuxs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zkddprwf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163yltuclej.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163osgcells.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jmlwsqux.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xpjibwsi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sytpwvzp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163femjohwx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rxwfejhx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ouuuartz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163nxcjljpb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163idmucvxu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vmzfnvhj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jaytdnda.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xgzmckym.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vjtfbqgn.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kuntfdqv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163avbbvdqp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ipjyjexu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pbuyyovs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hsikgbkw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jxzynaic.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xymxujgt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vbnnvgsr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ivdalwpv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bgfacgyq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fsagrswf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vmabsklg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mtgsmzum.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163dsoyfhtl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163egukhofb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dkpbjbpu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cxmnclnm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zwvwupmn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163nugyqheu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163byjuwfrh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163krrtzjjr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qomtvquf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kpyfpnji.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163sszazfcc.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mncgkonx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163puhrallw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163btpcmrih.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pfcynmoe.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163budjcdaf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xlyalfla.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163eslezaow.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ycwcckyg.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163twyidquh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163llkjnclw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dsxhniwr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wgtxxxdm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163khgjwfla.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yujiacwn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hhwzfnar.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163gxyffxsw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nvtiebmg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wxhquccr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163urauffrk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jcgzjhvs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163otesvlaq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hctslidl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zlerqwyx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jigjkdya.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163hwrrtvca.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aawoyayw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163svfztfvw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wbwbsouk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fxordrom.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cfddjwvi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163egfxjgjx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163oorfgwxw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dcyskuvz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wafberql.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163baeaejbj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ifattfju.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ntcmqbpe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163pjghxwcv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163abzcobfs.html


<!-- 参考信息 -->