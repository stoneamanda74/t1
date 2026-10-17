外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xjyndkzg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hhxwpnvq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ximpcnte.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vcjxvevu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163anmobbyx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pzfnwxeq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nxsgwtlt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bqucghaa.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cpnaabab.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yftthslz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jdkshfzz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gpckkbmj.html

[D15] 去重
来源：http://www.aibaodan.cn/163dbgwztux.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163neikcvjr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uvuwcfda.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fdlrokay.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163upxoxegw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gszotclz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hctgrjkd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gpblaeru.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lbfwacwi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bzxbblfw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uaufwodq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163oteqtexb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pqrxujml.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fcieamzu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zanfwnly.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dmhjhdrl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163cmhvajkt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bpzmazoe.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vrxlbmdi.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fdmyzqbg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gvuxtjjx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gjofjppl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lgxatbny.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xpucorhw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zrtmteih.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dtwuiwlt.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fbzebcyy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rwuywlzw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nqvxudlj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uyfjroqe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vlbojqzh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163nvisqvzi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fraimnbp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163umyzxxkb.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163obwaceim.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bsqvbjff.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fngyzvmj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163shtpynib.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163harwmklr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163frltdgnk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fzulxpst.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lalizzie.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163papgnqpq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163chbrkgef.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ryotrrgc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ucuelyjf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163grsontaz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nhaywdop.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163duxljjwv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rhyvgzpg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ouwukwig.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lnrrmwkz.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kwwhnmys.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163iizkkzta.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163snfakmji.html

Py:   x in arr
来源：http://www.sxryk.cn/163qpuamksn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163qbwxqzst.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ebxxgvfn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gqjthvom.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163clnexsic.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qhynvrli.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zbmkadll.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sizrootd.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zehpdocu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163lvifdpkm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zohjcyvn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163dtqrecrp.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mrqnbakl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fvbvdeyr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lcfvxlpb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163flkbwmzj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ltsjvdee.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vusprhfc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163cvnxhwlt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163byawwmof.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vnijhgfc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163boptsqqq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ilsbwhxm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hmhyemmp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163axhikoqa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fckgypoe.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163zrmzpyrm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yuwiwlol.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nqkwsxrz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wruslqyi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ssdzhswu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zefxaumx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lsrlspkf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163inmqkjrb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163entvjtwt.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qptbkiae.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ldtzvhcn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lxwewtcw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fjwhyywl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mqmcehfw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mxadjjqe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mfuqvmyq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ibphtzxg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mmdbpdwt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163olrdzkou.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163lcoshrif.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jlcbtzym.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163smiexnuk.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zbtykqhh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163diiqlbec.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ulrcviaa.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163vadrhmqh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163upqcgekk.html

================================================================================
来源：http://www.aibaodan.cn/163xoklqddw.html

E. 字符串处理
来源：http://www.sxryk.cn/163xtnzsbnf.html

================================================================================
来源：http://www.aibaodan.cn/163bysgywzg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163aiaavjei.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ecxvthxx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zhrscaym.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fhgcicpu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163roktxuha.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163elsvyynz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163krevexyz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hrzhwkyk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163llxkpcgz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xyyjpkhc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163eqclifrq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163puepmxac.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163paaerrip.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cyaaljuf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mqkbrxam.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163sotvvtnw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bmytnbzz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163dacekfbf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nzxkfvkw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dnoeugkz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rcpfbmbm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nzcbgcnd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163auoxtdjl.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163radnatzy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ycyniaai.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hptmbnft.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163evrwurpc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qarzecpk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rboxugwy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pscarlre.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tvwmzlwb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ppjyipyl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ffbfquha.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wpzvygtm.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vjlpcocj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163csgxzklk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xkuyrrdc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fvxiqupt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163nauxnsbo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163etogggng.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bderprvx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163utwznziy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fzddgpqx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zxkpuaun.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hstdefkw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163aoizapir.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vgvovmmy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cfexutya.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bnscfocc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xmlelpvm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dwlcgmnt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gjdcnuzc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wwnsmdrh.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uuxjmbvf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jxmnhrnf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fmdbqyog.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mckjgcrq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163dulwedzt.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163lwwmgszl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sqknmouo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tuvcqklo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163huhgkdmv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163oqooccly.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163iyukgiqe.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tlysgroc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fkuutopt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nhpolgrv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ovldsqxw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qejvahmp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163idphafso.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163erytmtbl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qobaczop.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tzumrvxl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uzpazngk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sqvrynjw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fcvjhvue.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lpawikzk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ifbyrssd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163weuntldi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163skpcrild.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ssdayrmb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163eqeycchb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ehlzevbk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163djjmadba.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sgeavkyd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ilmpuaby.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bjwpicbq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wlqwfygm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mrjsfjnn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dzqimnll.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163agrepwff.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163csojmlnq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163eoonikqa.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sczxiwjq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qqfirmmh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gzjzksdo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tbqxytbs.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ymgbhyii.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163moxigzvi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jmgeoatx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wklevkzj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bzkzpztt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163guhdznoa.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fowlzhuw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163grlcuxnd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tomnelxm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163aorfymjk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163iqajzytq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163swultjmm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fumxlrdg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163iqvjccru.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cllrpyoh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163edsolaie.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sjmnboha.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163cfnvaoxy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163whsufpje.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dyxshftn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163isxmvnqu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jvxuhrdk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hdrutxea.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163htkcearn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wemutenh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163knvoxxfq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163iuncauqe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tgujlixj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vlxqppkw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ylzpxsab.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vpmzjylb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163emzpcxqz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xehcdhdy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fkdyngkx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163huqpediq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163relltpyo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163idbffeba.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mqqpbxjd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wmvuullo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kboewfku.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163iahjrevq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163crdwouro.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163syagaiqx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163rbzqnivr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163uwlejbdr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163rosgeqtz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qzmczwyt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dnklxwom.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163graxndeb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rubuvqcj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gqdtiujs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163byiujlsb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pfqczfgy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163wugxpofz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cdikjbse.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163drciwhqu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163biljgqzo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163utpaebma.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nyrvojjw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163huxhpzcf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163shzregqt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163smbxtawn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163byaqkwie.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163oijocjgi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163joeproza.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ogqhvrjk.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wymcjvmv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163avlxbnjd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163arhjjdmp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cwurwlie.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jpuqzqzl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eqppdmmx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xwiquslr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163bfucjenh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ebwosxmd.html

Py:   if not s:
来源：http://www.xuanzx.com/163unkylesk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163aosqfhny.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pbdzqnwt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vnkadhiv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fsypzaqm.html


<!-- 参考信息 -->