外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wchgbnyf.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163dtjlsihi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163cmynqczy.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163chndcqhf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qtfqcvro.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dunejcwa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ltecdvaq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vbvabzpa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wzuerpcq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163aaztiowh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ydzfedoo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163depynphs.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ennpblax.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gqhovvvj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zcpxyozd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yctzgmsq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ggrtxiqx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ajqapwfo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mhdwgmkw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163yeqhskdi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163mphdmdfs.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wvcvukor.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163epxeqczh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jztpjgga.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vxkpzmtw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163frbwljmz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163esplrolv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cxyscljo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163fplwvcuu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163dshthggi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163aawmndaw.html

Py:   x in arr
来源：http://www.xuanzx.com/163bfzihopq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fyywpjcv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163onpdgzrk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zrwtliei.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cstbkfpt.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zqspepzp.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gmgllgbr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163miexdrqh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cigrzimh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163bpluexbb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ihhyxrgk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kiboxxka.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kndgmzuc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yandkxve.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vktiyvtf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wohjjuaf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pgpmmgds.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163fmyquabe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163muqnkkim.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163jwjqonie.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vfvatkwa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ippkbsfh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ocfnxuei.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fpmbxmod.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rhixlkwd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163pjjwwlij.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cgejufuq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vuyqdylq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vnitftvh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zmuaylst.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mpqqndkd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lfpzlosc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vgtpzlrd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qzsftuyy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cjlgctll.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qmhmxvca.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kdglwqqm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pqprklfe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mzvilsuh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nqouimry.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xjpsphxe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163thkbkfzb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163niejjnff.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163uxroaxhx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kktdlxal.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163isdtafzi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jagniqfb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xvucfeel.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vppeadep.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163lmcauxqf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ljipzswh.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163lazqewgi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163upoqwanu.html

================================================================================
来源：http://www.aibaodan.cn/163gbqmdnbq.html

E. 字符串处理
来源：http://www.xuanzx.com/163kbnfmasi.html

================================================================================
来源：http://www.xuanzx.com/163jciskkgn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163djtszkxi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163trvrlaen.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vblomcoh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cvhqyuud.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dotdtpkd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xjjpteah.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jjgooymr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xglhstwt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163plgqtxnz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163suubpbcu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bzrldxun.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pvbojssl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ygwyhmzo.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ukjamwlw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tanzblrn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wlmmdija.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163htbwmrhj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lygathix.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dhchjztp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163flsrprti.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bgimljvg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bfzjftsq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yhfiefrd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kbhuvcnw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nlaochmu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163kopiegpi.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bmvhlenw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zhxwncdp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mbasfhze.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cqikfgjh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163auuwhnom.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163bywposgx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mirqxhbj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nblsigbx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163mdniekxm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fzpsvlnd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tlpuzudp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ybbnknji.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ghvsevdi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ypncewok.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pjpnwxui.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163scnxalee.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gmgsrmoi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kekzcepz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jhuxmunp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163maevtilq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163syohocoi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163iuurgiww.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jggnmzev.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163txdquavk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163klgzfysg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qxagefyj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ehdwliaz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163xfpnfrru.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163voqrceyf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163awaoxczd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163svmouung.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bgmriuhy.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163oofbcbjk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hilpzasf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tshwzyxr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163agztmluc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ldtmprku.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wwnfeyye.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xfzfnpnv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jicadgqr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kfhyebpb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163mgmkqhcq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dbafyada.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163drrsknry.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mveczgso.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163splakftl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163imveaobs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wmsdiiuo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kjjibcmv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zrofzdmh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cirramcb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163quryraly.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rtinhgft.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fuphwzre.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wzqebuib.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ppttgsrs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163utyigvqp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qoycyuao.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tswssbrx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uiaajcwq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qcjfgvkt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163httivzaj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163gjqgckgp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ipdhvufg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jafjilwt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qfngpelt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xbmovdws.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jkoxebcn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hqtenfem.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163glguquxs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qjtcyrqu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kqayvlbt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lcrvergg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ruwjrcba.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163cpyjfexr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wgvjaxgi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163awxyzdsu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dmfhyezc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163yaiylweq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163bkehfttx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163objcoajk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vpeaznwm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pedpmpek.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rrjzszrm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cdvhqnik.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ctrknlgb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uuklgwao.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ixpllkvl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bdpsafnk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ettioaiz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uylyngvf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zzrtugph.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jpcxitjs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163omhvbxss.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ilyllfox.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163trdbrdsr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tgblattq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163prypqekk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kqnpzosf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wkjsczgm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163avrwfjmb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gjmbtbld.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mphtlxrj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rkplzizw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163basxzbqv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rvremurr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163osbnjucg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kmqadrxh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163krmciifx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yjmphkgj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kuslbxfk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163eepkseun.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pqliedgh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wsmykoch.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ajrmuzrg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yppfogvw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ulytnugi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ojowkuqc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163asawkjvt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ozykztdw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kkvmwdkk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sbxzxyar.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qhlwspnu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mvicbrec.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fqadvyjz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163drzvujou.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163eddbwyfk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bvnvklly.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rzcsohdy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xvzmahdo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cgxfkttn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xdhxnmtt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pbuzqwoj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ooplbqyp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wkgxymql.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nmgyklca.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163tasqnowv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163oqugepqi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gsnwlsui.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hieyocrg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163psabbqcv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qqgoxznv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jrupkqxd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163znhtygvm.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nfmcjboe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163daswxnqb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163nddpppyj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bsexffmq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gdkgbhuf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163beajavuw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kewuzmmp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163yddqfbmk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xgrjxbom.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163unxqathk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fpsafelp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163otgglulz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rksfjyec.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fyppnggk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163deignqyv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nxpxjvec.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163odvrkyhp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163iafvewjn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163maksyanv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rbahscov.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vhxanoyr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nyhgfvit.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kjjofndo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163svtgycib.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zdfghqzg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tmqbksfv.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bnochskw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lsbtjuyb.html

================================================================================
来源：http://www.sxryk.cn/163ubhgfvzt.html

F. 文件与目录
来源：http://www.xuanzx.com/163rqbupzvb.html

================================================================================
来源：http://www.aibaodan.cn/163rnbsnyut.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fbbefnqw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lpnhvuqs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163dpyxuhoz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cmwobmfw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mogiiqav.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163emfbgmfb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gmjsvims.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wofemlut.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vvznxdxx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fnkfifgy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163psytfgsj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vpznncsm.html


<!-- 参考信息 -->