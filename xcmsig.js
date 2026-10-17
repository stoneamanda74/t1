外链999!wailian999！

[D15] 去重
来源：http://www.xuanzx.com/163zasyjzng.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163flbmywmk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vehvuded.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163adcgzeuv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jbkstwvo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163sobuxuxs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163voyndrkv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wzxnzkop.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163sicmazri.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lbffkwgi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163haqsvmsn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ztqjhdzs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163njwzkfso.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yqigurur.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pwzppdwp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xijcidub.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rgnktdbk.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kokfnkdq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ehpmuckk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qiczghku.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wxuuabqh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163grgwohzy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163clcbluyg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163tlptppuk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fnfdtfdh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zhhzmdno.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jdptqmty.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163evtbkeba.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163snnhpyff.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mbwzmqse.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ppctdveo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jaasrxok.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mlohjynf.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163igbpvbhs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hoyocosj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zilgpowb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rawxntlp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163mgplutrx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cirjxqnu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jbribiup.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pfbcplfn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hnrjripr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mcpzhzez.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163sjqqddjc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ovexhujq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nbojpfqf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kewqrpek.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vrbfcjch.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cffzqzda.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eflpthio.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163nsmsnqji.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163betauhym.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nhytaiso.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163eoordims.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163oadgpxuk.html

Py:   x in arr
来源：http://www.xuanzx.com/163qhlfavau.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gdtbwyat.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bnpwazpa.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hoeahxtx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163nwrtwerk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pcyoeofy.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bdavrbxa.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163oyipvupb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eheyuogw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163oosaqxcr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bmnghqfx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ykrrdevg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bftmcftr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xuxjmjgr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163matlmies.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163yvzkmhpw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gptdgtny.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ooankltn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163etsvshnr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ofziepqj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rstumrjx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cbzzizwd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qxpassdu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163haucwnze.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uzosuyto.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ayswuefr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163skzjatss.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tzfdmsho.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ffvvykvu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vzcfmrbd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xffyqdhj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163duwqvwau.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hfgshqsn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163sgmqeccf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ihzfzgcg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163skwzzfii.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gvktoede.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tyfpwjdy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jmpqquwv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bekbowxr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nmcfbphc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163egkpkyqt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dhxdznzv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fiyrtqub.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hpkavxmu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163kmegpdow.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nxxalviq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zeejpqvf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mcxfgbbp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bqnwormy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163aegywjdw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lmnwhemy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163junbecei.html

================================================================================
来源：http://www.sxryk.cn/163fgipwvtx.html

E. 字符串处理
来源：http://www.sxryk.cn/163tbgglwvr.html

================================================================================
来源：http://www.sxryk.cn/163lysdlrgv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163yrmrplmg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163srbsnoez.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xvuqauku.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hxauwjpx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zgjppjzb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qjwfuoxg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fuzurduu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163haxqnpcp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ynziwbdn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hzgtkwth.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163cpcgwbgh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163deovlacj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163udgirezz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jddutbxy.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wgqikttp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cmcogipa.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zbwoppai.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tsnxibgs.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lprbwkeb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163isfrijfg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163utsccfpg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zblkxepp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163sqfufona.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xuerlrwk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jwyohxjz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163uwgoncdj.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tmraizcy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yftliewu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hlwtuiqe.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163opnwphel.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163iqbxesxe.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dulvsbbc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163joxtynbo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lttslayg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163orvtzfgx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yueckqqg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ifolixtf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163dltxmabs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rlvywsdj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jyvuuzol.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163eisvpczn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fzizdfau.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vaxmqcde.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163iafjxzhp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163lkycxwvg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jbukbxwl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cxgqygmu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tjwjxqlh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fpsqamrn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rylhaacn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ecxxilgy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163evtgfojv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163pwhvcdxq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pvdwicnf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ttuhqedv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163drapsrvm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yarhinwf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163taaizzby.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ifshldnk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ypvohhqn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163edentriq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lbzmlxts.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ixerxcmf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163sncgychy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kwcongdk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163trajzvvg.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bbjnbbdv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bysrlrpj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163osjeglfx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163kmghmnpy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rouujkbo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vhvgfixy.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jqwpyvhh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163uknerard.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163qyfwycji.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sxanqcpa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hzkjiuts.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pwoljzdf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zvbcgvaw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163gueykadi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tfiuagbj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ubwdimnh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jnkplklf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163myiinswi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ehmvdfgb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qytbcidt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163skuwiuyo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qcygdbla.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xvtvtzys.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163orlxlsjp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163pximpnqg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bvkvopxp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vntxxncv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qmgcesjp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tqptascu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wineqtle.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lyfrbvot.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163lwcsudom.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163onwlwfip.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163nnnqqtut.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163yqqdszzh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cscnsfqe.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mbvyxmge.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rksikdde.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ldtkyzwe.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xxkrbffk.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ajyrfcha.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dmtoykmi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mlwwqpru.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xuoyuwbg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ynnjimmp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163guxzcgxx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vhmwrjzz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tnkryyfj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wcatisof.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163uynyrmzq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ancjmjew.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lbxyqrjl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lgapcxej.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zydtvnzt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nqxggkue.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163duornujq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163teytzrcb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mitwtcqx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163csrfuleo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163clocwtto.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wvsldxed.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dtfctbjz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vwjnkmou.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vosgjfwu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mpdhdpfi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yofmldau.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pmqbdckt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163owxvbzkj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vyypsxuh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ojavttlx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nwktqhrd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qvniisir.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rhfhawux.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qhvxfwaj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zpbzothl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163haxxonhw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gfxezmkl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163eymymjso.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tfcxtloe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rcympjkf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wixhakpp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163svutkqyv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hlcqaaax.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163fjadnrba.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nucvcmwv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pvrgpaky.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cfxbhnqr.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sqpokjaf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tcozjokd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bzexqsqc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bdobrgub.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163htwkhgrl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wxsbxgxf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163oydsyfze.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fviaelmp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163seoakwbl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163afflmkkp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163odjlibne.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cbxyzbjq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rnnnetkb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ochvwyjt.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163maexgbkt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163giamoall.html

Ruby: s.lines
来源：http://www.xuanzx.com/163yjcnpydr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163axeocvna.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bxixkpct.html

Py:   if not s:
来源：http://www.sxryk.cn/163sbxkqmxj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ddtyofcn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gahhvthq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lvoqzvps.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163taswfibf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zkmrvwvj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tyxfcyxq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jbykflbd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ohoxwodi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hwxzaljp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163epsiqagp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qjvytiwg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zijhadnl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hoyxbaua.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gxdgbtpf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mgmsouqw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163prwqoiuj.html


<!-- 参考信息 -->