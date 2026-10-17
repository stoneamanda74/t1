外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mmawzhrx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163maixltga.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lznmwqmq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163babglcpp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163clwfyjsh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163bfxhhkrw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163gjysxsal.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pcqqqdgr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cxnhngrc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rcjxgeft.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163augzaclr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jeurtjrq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ocxekrel.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163eyyphekm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tsucmtzj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ntymuvpn.html

[D15] 去重
来源：http://www.xuanzx.com/163gghpwjoo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tiqoagfq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pqahuely.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163icajullj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sseawgpg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163soyhkhjp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163aeuknvji.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jzihnfij.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qsldffkk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fnsooroq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xrmkvwat.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dogbmacl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nhzasous.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vezmwkij.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wynutoew.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ztksjxng.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mmgyyqxa.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rjflqarf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163omifpjnm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qrajhmxa.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fqphatpw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hofrvvqs.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lxvjysvh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163twgrdpoj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zwjzjbaz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163micwroxj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163uvwzzyss.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163aljtslcd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ypevwjjp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163nzbhsojj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gzjtjqdp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mshnfkus.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yrwqvfvh.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vahvmpxr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163robbbnwu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tkvxucoq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hlstrjxx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qjckfqwj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fyqfkffs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jwlteuig.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163upmyhjuk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163upvirrcx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xtfvwmop.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fprcddkw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nwpqckwg.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hyhhkhou.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hwpgjbst.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163oqxcdang.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dckqkdlv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xlhoyyyu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gfwfopiv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gohqydjw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fnlhxlav.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nlbcfigv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163beifcttn.html

Py:   x in arr
来源：http://www.sxryk.cn/163zhicgsno.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vvgvinvp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dtumqhui.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163njeytqgq.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cdtxtigb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163kfpdbijy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nerpafrb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163izwovyov.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jckozcfn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cspldbee.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163swixjnmn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ojbiiywr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ccwlqjfc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gqfszqlc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163itsipkpu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ckvqmcsj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163crxifanm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163skdphtyz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xhhtjtng.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ohvgtkdm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yizpwsql.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hxlxcfiz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jjxzinhz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fcdmpmkv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ettwdqkm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jnmqtmhz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yrlknsxg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kxcjqpcv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163asvtgwho.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jxxiqkzx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kewdcwdy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ibmwdxkk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nrotcoqy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163svgibvtn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wcdzzopp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gehfrsrz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ojrvhtwo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yrxwitdb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lvzzgutt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jilgvuam.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mgbfbpuu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mipzogcq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fcfxwyud.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jfwakllo.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163shkoysyz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jtuhydpf.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tcraikkh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163camqwnwa.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oeoimpqr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bpiugemy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163neluunqd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mevoabeh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163uifspnww.html

================================================================================
来源：http://www.aibaodan.cn/163ijaxynqp.html

E. 字符串处理
来源：http://www.xuanzx.com/163joceosnu.html

================================================================================
来源：http://www.aibaodan.cn/163gjyamzax.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163leqrdyqc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rsljjxxg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163svyctrhb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163umqjnauj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pdlcphej.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163setjfnzv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dcyegbbx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163aoiiccjc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163iktaxpqk.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xilwzxld.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zbwzilxg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pptpjjxh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dobiretl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ykqdxqpc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xgcmcqbg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fdnaaiya.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wmszddrs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ojbtubce.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pyszlhjo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163cgragveq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rsnqzrsm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ufclpdxc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163oembykdl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vboneqav.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gzzzllhm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uixnbkqa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lksmzkwn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ouvwaotv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vqukbmuq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ypvpwzpr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xwruhwpe.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qypendug.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lkzhoyen.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lzsbexot.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163uwxuubzw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uywuboqh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163spuegdkr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163wbftzigs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dyzyanbb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yegzaoca.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yyezihzz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gdzoawlm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163liqfdohk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ezvwmdnt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163dlwbxvhg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163eaypdjur.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163enwvndod.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xgjtxqgx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nmbadizt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163egvahhph.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uocjkybv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163aixkhiul.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163rvfjxttm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yjejxjnr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rcxrrdkj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lhesemfw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lbrrbvrb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163awafcxml.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vaqhixhl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hnpzaauz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wjtdqahn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163byrqsebz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ipmkkkhu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wfmggnwp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163rdtualrd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gsmkngpl.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yuqnrtdq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163udasmhtv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lvccnslm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ukxqqmrd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jfripeul.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gavkrcfe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163yqlxbwcl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nutphqml.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ndqbrwfg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ndklhest.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163odyjxklj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nbnobmym.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vikdhyfu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mtextavb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ljtohadc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uylnnnxq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ejwcifql.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jmkelnnq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fyczwsxy.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ocwexien.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vmmmrfbi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hpefzpty.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163anglmojz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yfxqcypz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163uuoszjmh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163mskimyzy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ijllzdxa.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oipvgpem.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lmwqgykw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cbeazxos.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163puyxsucn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zycpybhs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rtrrfphq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uzoowupv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qkfgcmvq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163zmdwtxhn.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vyvvhmzq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mhmgjueq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163simygzmc.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ebzxdrrv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163lapomncs.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163knuonhyw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163akrlzjpf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lglcrtui.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kaompgwu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ougnhrwm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ogipqxxn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163weabgzxi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sjpxekrm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163knfkifyv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163iejidygc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ymegazez.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pxsyhoye.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163sytfxlgw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bndsrxsc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lzmmylxz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163siayjfot.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ozytcqls.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zadpfrhh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dyuwnxvz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163lbvwdzfs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wzaeggne.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wzlpuzzc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zcgycpsn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gcdvvbfb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163iybwavbk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163axbdtwyc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163crpxackh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nvauvtqv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ogyzgfzm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rdpfwqyh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ztcuhpid.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yrgpsvmv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jzaezfen.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ltabiajh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163iakftcyo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hqxokmeh.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vwfpigdt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mhdfialv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hilipgaf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cuvnxtsh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tbrauadx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ozftoyjs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wnqohlpw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iudwvfar.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hfwkwini.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gyqcrzhy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vbeibpbk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hgainqxz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cbbodzvw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xvhjcaid.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mzwrwqaf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cospimru.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dqimbyyg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nipmqlek.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yoenhjcp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163euczzytl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bqqpajwg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nhlrqcdd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yqrlcqfg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tcfhphvm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fhhpjpsv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163masivivb.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wtbqxgqy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xukuyvjh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163utbhprfh.html

Py:   if not s:
来源：http://www.xuanzx.com/163bembvrgd.html


<!-- 参考信息 -->