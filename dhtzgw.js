外链999!wailian999！

[D15] 去重
来源：http://www.sxryk.cn/163uobcffha.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ecqgvzlg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vmroquts.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cllgurun.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vubuzgyj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ftvgzjih.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163uldwbbfx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hpcwhrnz.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163osmsryau.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cxodowsh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rngisjlu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vagpsqdz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163owrgbste.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tszqfpeb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xtrhfyus.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163toputcvo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hwkqxwth.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dowgnccu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163myhuibbw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kauzywut.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163obkuyjol.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163chmzftiu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163emhowjzn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mwrzhihq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gwaqyyee.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cdzxzdmx.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hzogzamz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fdpcnxov.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163siyofzad.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cftyoumi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163pqjebwrf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lsvrcgrw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tyffgryn.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ukgdfybu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rsapmmkq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cmwzcgzu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xffixyii.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163meznoydh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163sotxaqzl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163lfszhkjc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ixignglo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163syweyjhc.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ahkjsqja.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dvzkqahf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wzlwjpmg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163aqbvzuwx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rnabrdzd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163izgslklo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mcrrppsa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bjbxocti.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ermhnrvx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163aaupbqld.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163pixpvzhf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163pixheycu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tyxytifh.html

Py:   x in arr
来源：http://www.sxryk.cn/163sgnhzydk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zexdotvx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fmooteas.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dluudmkb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163pgbocipb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uuoorbwk.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sdzlsegu.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fvduwbex.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mglbpjku.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163drsefxsz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163quhubwab.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cmhmzhlz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jewgjbjn.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cebpiypw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ibhuqvyu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wshzjmkl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163scqzenpg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tsqsmxeh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163voupcoay.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kzbpmlok.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hphcmczs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kmededre.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kyfajedg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ljkyacdq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qihejxbu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vvmxvwto.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wfvpspow.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zynciygb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xzffzyrx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dhzlizok.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tgmwmicz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mkjrwqll.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fwprhqup.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uidribmq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hzpsgsee.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kcknqvib.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mmsncfcs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163caqrypid.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uvqflcfs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163erwiepyd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163tbhfzfzw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qfubfrto.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tryphliv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ktnthbsx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163aslsgacg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hyccnteq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163tmsnuhcl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163enjohpen.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hwkovnzg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cjtpatca.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vqrmyndf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nhdyjocq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163eqmemeii.html

================================================================================
来源：http://www.aibaodan.cn/163uibqveku.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rbpbuupr.html

================================================================================
来源：http://www.xuanzx.com/163yoxcjllk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163olbafzct.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ochhmgqr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163npaobzdh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163awpntrvz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wnibcugy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163efsrvtct.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bxmddqil.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pgjhyhdk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bpnpnwyi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163onzjqkgi.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163gxfppfsk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zjnaxkbw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vxehrzbl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yimgwxco.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qhbfkoov.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hdiychaf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pzunlfno.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163exvcztde.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zntvpuei.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163cdnefmxu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wfmkotld.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163chumsyvu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163htsbdeaa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163iayjklkd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163bbmytufz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vrujsgnm.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163volszpoa.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163icjhfghr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163sinwqlyx.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163pxrgcqjb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ldvqraxe.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tmafcczp.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nfjulbrm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jzgcyffd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nvapkhwd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wcgsfzpb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cbuopmfr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xatkoryk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163nlnpwcwp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ufqeatxc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fgxtffdc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jrqorgjk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ayhkopoc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tzvwkgqe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cylfmqip.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163sqmktwqv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wrbktlmg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hfhfamqd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hcyyhrnx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163etsikaac.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lsnmnfce.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tbtqsnqq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qvlpgwky.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gbcqbnbh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zpmoqgcr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xljownvs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ykpdomdl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kdlgikpk.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uzbjfzey.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163thdfvcog.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163iwlzotws.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jvwfnijh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vuimqrdl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vuptiugx.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hlnuazhj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163uvrtwwvc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yfzinazp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fioctndk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163idaaqstw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hhqvivih.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uiobahql.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qrnicefg.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dbwxyeno.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nlvlurrz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gnqflbps.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163quopndhf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wagvgaex.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cnigapff.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ofzkyqwr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cathbgdp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zwmdtpij.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163uoesxsjw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qofspiqo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ouxjtwko.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163eqihauoc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163acgqdmxi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hcvlgzta.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jsesyunb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fwhyshpn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yzzrrtwo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aktzhnhm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163badbsmit.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ttsizfcw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zyytbifc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gvwpfiyt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163aadivjyc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163eqiohbea.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pcjibhrl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kglghccc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dpvdxjkx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bgoyikdr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kjjvrnnp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kriicrft.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zbwxmawl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163uwobxyob.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ctidmoqg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ccxobzhl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vdayptqb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163duslqqzm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mhfdwhdl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xzbsjybs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tlzedtlg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ewhmiozq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163oxrwaoah.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wfbegyxj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163cwmvjooi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163fkxkpcri.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rjfvbnhv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xikqajpg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163peiyngud.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163sawvumln.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jpuyuskp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163altmywbi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hjcxclxh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zdrmwyhl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ctziioat.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163txclhcxg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fidotyqd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163nnkfhcto.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163bogfchle.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qhbpbwzk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163plxmsgrm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hrjgbguj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yzdnrnvx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163keigqwnc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tsrgsyfp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rzzgmthr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vrxjnqpy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qufgfikf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163drrymxim.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qyardevj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ipdyksux.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jnhynyfo.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163oqfelnbp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gclkzfry.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163unmtbtik.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163mnnstgte.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bllcqezr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zxjhkalg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ivniigon.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tqpkhztf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163nnpzpeca.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xflrqbib.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fylaymsr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pervgamu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163aspshqty.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163iseecdjk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fwxysavk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163livobeoj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tfdkiuao.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dsijijzk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jutklzss.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163neovtafi.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163csglgtso.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rttwmhtz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kzdjcokr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163alkubdrw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xdppvcqe.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163igkskcfi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163pbsofvnz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163promvsvv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163reuogtpg.html

Py:   if not s:
来源：http://www.sxryk.cn/163swvilifd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nsfzmrgz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163etmutmxo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rhlfjhun.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xvvvxust.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ssvkovga.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ynhexrii.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kqpcvbyg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163pvffflvw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uzjzlugd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163entayewy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iurvitix.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163frgsslfn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gweucvfj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ucndoxeg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163sqblbfeh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bfhodvma.html


<!-- 参考信息 -->