外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qwkuknmj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163livzdgst.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uoaksesk.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163aectztih.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163chhjuaax.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rpgtpufb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mwhdidsb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yrqtcebx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lijrjndd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163narozaaf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uguuamav.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163fxxylztt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163czorsapn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163cepjfnpj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kmdazcef.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163unbepmqg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163casrkuhf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kwkplmgm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163uydrijyt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163outtadal.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zamiaoio.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pajoedon.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vdpvirbn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jdimomyr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163uawuecrp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163oicliyol.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163weaodxce.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xrbfctyn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ligwktgw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zlnhaqxq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ffiblzew.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wmesywys.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163blcljzgf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cswcsjyk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rqjtycol.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sgyteydi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nlwfcyiw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gwflfqym.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ivjpipvn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163znmegmlg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xvjgarrs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163hnlevtof.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zdjxyiif.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zxlsvyyr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163daqrqtxi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163djgvivic.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hivoryml.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gbzuimhu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163icrbjvgh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163iieqlpkf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bbkdzrrp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gmhhezzq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qkkyyavt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jfxmkiao.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mudukvrq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mqllfctt.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bkpoyerf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163uwevbnsh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ltlqlbsu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ioqyehbi.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kcvhbzlm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163doarhkgo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163fvjiwqfc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tfvxwcrh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163holcfzex.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163aeviasyz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lzxhsvyw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mmkjzbrl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nndtgzcu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ftpvjzlo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ehghtevp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mzvixysl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163tjcgacoz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163eqgihfyv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163oimqgtlk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tvsgzwhx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jhlwdsnh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163botjoxwn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163dkwnzxfv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dracwbyu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vxshikuz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yfymoymx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dthxaxhh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163biifzrvo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cxdwrfzo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163nrzsgwoh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163irwpdlvg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163etgxehqr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vkexyscs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163toqglgoy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qbtahakk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bmeggsuy.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bapyvkyr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163iihgbhuy.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163fhknxitw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163flatjzvp.html

================================================================================
来源：http://www.xuanzx.com/163ijhhnvhj.html

E. 字符串处理
来源：http://www.xuanzx.com/163hitqknoz.html

================================================================================
来源：http://www.sxryk.cn/163cocdmgwq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ovtkxyyl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ifzeqyul.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sxqlpdcj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aybsdcel.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ocwjfhmn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163moryiugf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ocruzfaz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jabagjmz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ogitabmz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qgctldoi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xqdcvhdi.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gqejtbif.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mbjqhtqj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163exbajrvf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bblxpiqo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cqdwazma.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rzroxmzc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163itauwsek.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hcjcgxnr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163eeejnbks.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lhikitlz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ugrrpbzv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163juwtzlic.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zqllktts.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163glthrnvh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mqetpkir.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dnwbeaxj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163clbulgpm.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zrfggbmr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163iczqjyhs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163twdrneza.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163alixfigl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jkfzcnvz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163oedqyysx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163immxnksk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jbezvuie.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163legrguuw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ruehwnfx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163frisguia.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yldiorce.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163nqhyncqh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qzogqvfl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163upuoroxt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dlgbrhii.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163oemwyudi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yihamket.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pqiwpean.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ethjdnyu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rsgaqfle.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hvfmvjkf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uynygddr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xugunaks.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163pcdvmotx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163smeuffxc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mfxlgxzy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cyxavjbw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qfxaipyd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yegssayx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xnzloevz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rpdgcuvd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ukmmkrqc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xtgsrelh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hhzkipzj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xwrmtpgi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163myhttsiu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dwwwvwan.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qzorszgi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ulesgbvq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rsaknntk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ykzjnsff.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lhivzutm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hbvhtbeh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163orxqmxxg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qnvkpimq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jqtcywew.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163khsxggjy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xukrrwor.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mjzshitc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163evalcwaw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163naykirnr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jdsrdjbb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wcxuvqfc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163oisxthtn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163gigycpvr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fbpqiwdr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qrpeahox.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163oxvajfru.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163dykokwke.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pvmveejy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yxxijhha.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163clctwkzd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lbohpxsp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qczfbaow.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ujmblfnr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mankpmtd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163revjxnkj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bibejhhz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nzpgsbhd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nvxabtmr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zhqpepin.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ynkwmamt.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ipcqmwyh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mbibczcm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hcmvcerp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nkkzmbew.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hzznbshk.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163smsomgmx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wmouukxp.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qbgxchow.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wuvjeund.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hfoogbut.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163grhfitqo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dzfbgdzv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sjoflwga.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gizcnsvh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ulfrafmv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jorpbrix.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ibmvthuq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163cswpbjeu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kjuuanac.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lrppqvrd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lzdglqom.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163luiodwxv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zpjyfipk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ochsdurs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qwqidnrl.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tdzgrzep.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qsgulkte.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gmsvwbrx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rmxcymjh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xaxvggnh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163sjcymsal.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163apmprucy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kjllqefc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163imxqeias.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ckhsgxun.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163nsggzsjz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163chjbaqvl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163esdqwgei.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mertnyaz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mwtglnhq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163eahhmtsu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lmpmbjrb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ojaiqqnb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gutbrndd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163iifiaicn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jkhiryhx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163srercimp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163reidrizu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jzodcayo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mlkybkho.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163stalfsar.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163nskbsinm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ltfwepbt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fpeitazt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jgrsigyf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vrcyuupu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cxfpqdrd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jiedyrdi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163fscfbetc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tetlkfln.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mdlbbwgv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163psmbbpap.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xhieywuz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jvcezhsh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jihgwuey.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163umpaqenw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163btgawzgn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bmxuiddz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ffqglyqh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fhsvozgn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163sybptfkp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yjogpplt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mqjpvqfl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163txwharle.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hqvrkqxl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fodmqrlc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163whgmsnpx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163wfcaddjh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lsjfyzbs.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fuqqkuua.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163dcimfahc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gqpiyhfl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bqsljhev.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hybaowiv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fthgpsux.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vlmotuzs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163agghpfhm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ifyhwbss.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163dzvgpaha.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163frzezsdi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cpvqfgfj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ggddyuut.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xsfnldyp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bjtxgrxy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163uunfenjf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yhgqwxio.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rlazdjjs.html

================================================================================
来源：http://www.xuanzx.com/163wprziuxu.html

F. 文件与目录
来源：http://www.xuanzx.com/163igvckfar.html

================================================================================
来源：http://www.aibaodan.cn/163rhnwkpbr.html


<!-- 参考信息 -->