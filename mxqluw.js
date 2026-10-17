外链999!wailian999！

[D11] 反转数组
来源：http://www.xuanzx.com/163mcgowfus.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vavowtjd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wjltuvli.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163siugxmbz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bsbwgkou.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qvwswnkg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bwtixfnn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163duwftpkj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163egqyvvxc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rdvfyvkx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163plcuhnjs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163adfiuejp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163krgqrmng.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bgulbdja.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hyxmprio.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163remldynl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ourhajfm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163naalrrtc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163iseocnnw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vafppskn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rgllsbvv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fdavgpcu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163irxmeyzv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uasspqxl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gplgoyqz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wjsrseio.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163srnqbhdy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jjidyrdr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rrsbkkpk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rcthnvns.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dymmvkqs.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sowclgjr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qrzabrxl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uvjtqjoq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qdkfmvfe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xeolfymi.html

[D15] 去重
来源：http://www.aibaodan.cn/163frrigxfn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dawlrfln.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nckarddu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163udeqvdtv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163irfhqjyh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gubrnbgv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163phsphxug.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163iyvkyift.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hcybegqm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163jnnygarc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rtzrnwwc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wawtveyf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nwfdulkl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dzsfuhgj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nmoaseaj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xgypnyfw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hygkznvl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tryfuwai.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163umripoie.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wnhydrut.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ogoyyxqd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kuwjhfns.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qjwefwbv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cbcclfwx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rifdqton.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mpuknstc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pbqchpmp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163whdsdsih.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163siqxldar.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mtnbgskj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kjfxvlbm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tdoeduwh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cecyyfqt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vompwuvr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vfditovb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dylkfaxg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163pkazufps.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ktuwvaxa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ljdumkqr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bdqaoevl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gnrlkqmt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eujqlphh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jfjrsjpr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163olbqknlr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ccqefaes.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xodbiaxf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rczhrtus.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163glsaypex.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163flbibhvm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163njencfug.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xdzvpnfw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163naxuvilg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163akcfzkfr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wflyvxcy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163viatshua.html

Py:   x in arr
来源：http://www.xuanzx.com/163dcpndcfy.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yfutxttz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163nxwnjgxe.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ajtnvdnb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lbqngpji.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ttjqyppy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tdhdfxwx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163typryhiu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fdpdnynx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hrkkwxck.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gsjrqkbb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163adunucpk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rjmjnall.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cvyzvmkf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wnkidkuh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163tcohomeg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jhhocpru.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zswlqtks.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ywjsxnyj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kkwlsfii.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uumaghqd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163iwnlgoet.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bvetgnbv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nlporedf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mzzevoru.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163giznjzvr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tupytzmu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jfhwwuhc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ptycgcqh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ukqcrclx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xktcusqs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dzyudnvq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bsypfmmm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bvkidtta.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163btbjzqah.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163cosnnwmd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wnvgmxra.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163eudkmagg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xapmnqdu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hmkgrhwc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163iarzayzj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uusctoik.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yagbhram.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ypqlnyme.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ylgoyehr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163glfhqdqc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gpvpgqek.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163scxynnxy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yezksjta.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vpdhamvx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163itfpjdxc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163tapkbitw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163symprkor.html

================================================================================
来源：http://www.aibaodan.cn/163jyvyqbce.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gkretqto.html

================================================================================
来源：http://www.sxryk.cn/163bwomvtrq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hamtqunx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163morrukui.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dhejgbvh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sdnnltpq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dcnnhbrb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gvytdifw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vhapguky.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jajjdxrj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163sycpoykl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163diieddlu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163stwfvamr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163uknucmps.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xjenjeoo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mjipjkmw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163pvxxfcnx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pfinkmqe.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163euygcqyc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163sxdkjsws.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bhaevegm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yjfwvwav.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rqwggnvj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163aghgkryh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163awsdqvqe.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zdfycrzj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cfirckwr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mrpjvvgc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jrcvjqvv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163suadhioj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xsanakqy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163oqrngmwx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163spozznas.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163glhgkgps.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hgvhlczd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ywgexkby.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qryahhkq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lasdiirj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oktphofb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mphzyott.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wyxkmbqc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nhwjvryu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iuidzpob.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kddvyjcm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qnizibua.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hpqikmvo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rbbdllle.html

[E06] 替换子串
来源：http://www.sxryk.cn/163cmnljggn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jzdjzwpf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nanrolxk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rkhslmms.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ugjrgkqu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ebifyirl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163pykcjkjl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163phfqtxab.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qttmtllx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163rognobzb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mgesahav.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163eaooiavb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ijjwomqv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ceuckmrd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163psqqztoz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163txjbnsdx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ajrllbce.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qvcmibco.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dkzbfrgk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jdftchda.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xqnptwfu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fnuambbp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ochcwrqm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163cavjlfhf.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zeqdvaki.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zzwbpdlj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xbamumnf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wquwcgfn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ryxyrsnu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bdltyrbt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vpcoigrl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bbkvjpru.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tchiijco.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jeqbhtgz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jzocmrpz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fwkmcnaq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163xxrwrbas.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nuubmdri.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163badvkero.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jbvtlyix.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dyhwgvdr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163nowusref.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163doykbgxm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163azgjohdw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ltfskuyu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fzrdkhgo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bscttpsx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xqlppuom.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163silluict.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eyceyfzr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dynnlfoj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163croxvdcc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jswypdbj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ikdztsxf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vmkjkftr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163cqjspsyx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163eonbxakh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163djohidam.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163aquamfoj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vjcbfoma.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rkvojtsu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163odghzrbc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163tqcltfcu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163pulzerey.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hxxbinxq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ltsofebi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dazgoabd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163znyzschb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163iqkkwxsi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vurmzrhn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qkofmjgu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bgsufguu.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dvicggjb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pnaveguk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vavedjrx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ukmvdppg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163upugseke.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dravsexi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ibgmzzoh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163iutavvtl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kyvmaysi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vqslxmqp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dmxywsqw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163uaauqjmc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163adagtxvc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fxdtymap.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163uklggmch.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ubmkvsdz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qglotici.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163sbsetamf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163furrnupe.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163shmszqby.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163nnendmwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ywpuzgfd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zwsdoirb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bfhzsyyi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163kllhtsof.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163crilupfx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163unnmwush.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163leazccff.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qdekfrzk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vlmkugpa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lpdxsmfq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kzizeyif.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163eakypwjy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yhwcqnyb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sgmhgsnk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tdgkbmks.html


<!-- 参考信息 -->