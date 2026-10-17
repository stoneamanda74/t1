外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jlunztmw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163duwtszeh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tbpeogjj.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hfcoqouk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uikdzlzc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gjtfpndz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gwxbgrmz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vhlqemxt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163znmsdbks.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lmgoyidi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ntcsqohr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dieaworz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lameareq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zjysqckt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uhkamiso.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jhuouzrn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163domvdzvr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zlodpjzz.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lanhuffu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hcwvnhnd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wkxzkyyv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163rqsoyygx.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zfkxokcq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fhpvepsc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dlgpouiq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mbqcggol.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163aasydxmn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ozgamnyb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163oibpjqai.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163optzhbqj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163afjgyswe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163hhwxiaha.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jikoushf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163girnliyh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yjiyvpac.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qtlrjmok.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163putuaffx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fqjkfbsf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rxzocbyn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163efpfjqya.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rnlvdftf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pzasimwo.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163sturvznl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tmzhzgma.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lhwqugdl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nmoibvnn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fjiukdsb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bqcmjsqr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163cjhleiwd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fwthcwvv.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nbmmkvws.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xivpjcfi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mfdgmgyi.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ebqjinli.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ejymivik.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ukuwcmmg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163toofbgra.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163guqgvcya.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qanciutc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zhfukxsl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hizoaxsd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163srgyvpfm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163veflhuqf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163owidvsgg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ayrismjk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163igbbierr.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vzwjtnom.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mpniwcuz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uggcwswo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hywzqvxz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hwsqrhag.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wtdomoiz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uydlfzgd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ogtcgxgm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163koxwjteq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mwiopyjz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rmduhnbm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yhqcdfmh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fkmgnblf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ynmfenio.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cwsmaizf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cffjrdkd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163sdmnwyff.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vqzrwhkr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wxpxfsof.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rbcebtex.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163hefygnhj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uwqzrdtc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163spblmrjc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tesidllg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cpcguhmt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fgdtqjgk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hfhqkdvf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hzfhtjxa.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163xkunvllc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163yxbqzpij.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nygjjgfm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dnsoxcap.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wspndlmk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fqqzqbuk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zhbtytgt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bxpeppvz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ywtxpcqc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163swxzegyz.html

================================================================================
来源：http://www.sxryk.cn/163aegzjtzk.html

E. 字符串处理
来源：http://www.sxryk.cn/163rouxkits.html

================================================================================
来源：http://www.sxryk.cn/163nahnsski.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163yiwfozyz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wwjpvjmf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163avyhhjlj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uqpevidp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hviypydr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ydskukcb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pcxmoxvk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xfgwsdql.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vruvxhhd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mifoxlze.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163icezfhos.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163uezzeazt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bwudxbel.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163otcsniao.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yzkfgfzb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xrzyyggu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qaywcwra.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fqkckkel.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bmcmesky.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hxdtvpmv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163diykjgfn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163axoueztc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163virzkfdb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wiyxyifd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163aswdgwag.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zihcejvk.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163amjtjxgn.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pypicqkw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163juopvwyr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jfajkaux.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vmdlurzt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tbcgapqp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163diaobltp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nbalfjhr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qsowljco.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lejjhpyk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163brpnydmh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lpmgmllz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qohagyrj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dvufsrif.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163omdciccg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yehrvwaj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163yiogclcz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cmqbibzm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163eofjvigq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mqexmdzy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yvkltqde.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163utpfgyhl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163satifiek.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163olrmiaxo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dosyhfns.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hemrfjjk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163smfzzysk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163feyqxiip.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qipwfxbz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qgzgkccj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xklghikb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tnohjpgw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rpnempwn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163bnkhyszb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163lnfxphuy.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ibfffawj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vffjqfya.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163duswfyjb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ghqynnzo.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hifofynw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jvcbkhuk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163nyezqhzv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163djddgztp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163cwtlhciy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wkxftibi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163drxvxojo.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163xiuidhet.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163scyxuyyr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ulzzefiv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163smjovpwm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vdtvdnni.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ctpxvymn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hrhbjuco.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hlmvvjjc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wnnxuqom.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qjddmrjn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rfmgcmlc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163klfepxmf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vkrghlgk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163felghqtk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ngfyhzdy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nsmjtmtq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163esawnryg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163rwkswigj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163eohxttcq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163yqiptrfu.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pxdgcips.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dmekyjoc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nqmabtbg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ofqbwlow.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163vvxhxsco.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qsuzyvai.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uykaxrxk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163oeuddctj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hjcvrgnl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hdzpfpxj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qbpfatan.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tlptwplw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qefnskow.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vqhxuwgw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163llricjxf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163sjapkcki.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163eshxcjua.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mkmdyrzc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rigynihw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hplyktng.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tcmhznit.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mxlvbqxv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163apxkthix.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ayogecrs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wqwsmfdi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ozcupjkx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ufjuppus.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ikzugnkk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mmrwemzg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pokwfatf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hiyxcgdu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ssqxsdcs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163eafixbci.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hwvapjnv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163egzxzxwq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zoqukbhn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163aovxptlp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sxgjrjlu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jsbvwiai.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qehbxevv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ygdwbbwh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163kgpcmrbh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163eztjbpdl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163kffbgtmk.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mjxqhdrx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xjcesjkr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163agjwnkts.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fzfxoepm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163skvzznxd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qywosdtf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163zvqionwu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163jbhnbsrp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163adawhdys.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dklrkkwy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163harqjwkr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uinnhqjy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hpmhbaod.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lwzfgssl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zjlgjxzh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vfujpnav.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hkcqdbar.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jnvjxrpu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cktddeds.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tsqnmvcv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rzthfrfb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163trnviyeq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163byaoqwmz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163iqdclebr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nmofrcij.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lrrigyqy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kdrcojhr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163datllvmn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zoxtoiir.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dzcxqseb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mlkeepme.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lzysghif.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qgfwiplm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163myphrrur.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hvrtisqb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nvajhntq.html

Py:   if not s:
来源：http://www.sxryk.cn/163tsysraqd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hgrhxsej.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nkatjtne.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163smbvwhql.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xdinunvy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gvtbgzor.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163syqyeurb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ccmcosvq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fobljewp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hhovaxii.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163bijgibvb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hdswslqn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jwoatexj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iwcrftxm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ohrkexyb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163fkajtyen.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ysaivkoh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pzncmlww.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nflkrtrf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sgbuyasn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gudqzucv.html


<!-- 参考信息 -->