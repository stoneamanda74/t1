外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dlhxcxve.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ybccrllj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bgwlxaqz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nodpufsz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fvmiwqlb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gdwjzeqo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bcuipujh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163inrteqkq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tnpkwlqs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dmqaqorf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163nnsfgfql.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dpadsvcs.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jwjpoxgh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qjryceny.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163flvhdrme.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ioanslyt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ybxqglch.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zzcuajqg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bossnafp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eqykalkv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nfrqivhm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163thnysbsd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pakdnphv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163phyisozg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rizkxcwb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163heuzdxso.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jtsmqtdh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rjpkvord.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zrdvplwc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163dmihqmmw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ukszpxfx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fekfokho.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zcqtyrxu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rswjxejm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kfdhykjq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qyvwyjsr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nbxzfwmj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163owgreniy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pdfrpcdh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163oxzeqeun.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163osxlnkgu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xbfrufvi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tggxjtty.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gkowkdwp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zztdmaoe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163atplzzkf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ihbsopxb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tahqbfzv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zkftohss.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vleweakt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ixfhdkzl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163olbcdrnq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ooouznli.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uchfthlo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fhdfxgcb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wzrdnrld.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mxciugfq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163irnxxefj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163artabzji.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wqjthmxf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wmrrypgk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ntaapegj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ofbptcrh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163fowmbqgs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gyqlsugq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hmttwzim.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mxjhhksx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qrzwnxks.html

================================================================================
来源：http://www.aibaodan.cn/163mtppjjib.html

E. 字符串处理
来源：http://www.aibaodan.cn/163howklndt.html

================================================================================
来源：http://www.aibaodan.cn/163ohhraizd.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wklaakcx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rlrehrtd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xdwrivho.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gdnqaldr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163edpioujt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pexbhvxk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163lmpkisst.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163surjxonp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bfpxdxin.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163pzdrvjyt.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rnftjzsr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163saogffvw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tpaasxvt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163plfxupqx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163txkusjbc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mtvjxtep.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bpwkhrbv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tvwpjcrm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gacyhhst.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163frjfkjnz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163anhzcgwd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bbpcfuzw.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ipowaigm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ukdbyjsz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163wjxyahan.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mohoqutw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rlmjeszy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163eazknnih.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mbojciwq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gesvqsbt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163iicshhpy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jhtvwycw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fzmxfiwo.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tlkmloco.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nbxwtbyd.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163batraqll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kxqxkesn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zsrjlwne.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dtuaevae.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zgoiwuia.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jynpwict.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pdnvbntw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vlpeewrj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pdvrnipm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ptjqqdad.html

[E06] 替换子串
来源：http://www.sxryk.cn/163itutkhci.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163abdzrhrj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163hatuwrdw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lklntltb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163edjzzwqz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eivremfi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xxiblzng.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vgsaprgp.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gwdscdlg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mgzffxnu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163flnequyf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yajoiotz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iqwqgwxo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163okliqzmy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pqjhwiyd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dxkgntlh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qfsgwwcr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wsbzxduo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pbobcjfz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cvimxqxo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163suauitlv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163eofxvsuq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163uveybvre.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163aldtucve.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wgadbiwu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xwelcrxd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jhckorot.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fzvjfelw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zpzyurkx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ywrtozcc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ikhnspew.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mfbrxtlv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pfovodtf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gdrsusoz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zktlvtmb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ywbjcxsc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ilcvtqxg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ctwzromg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163artajtnk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cxzggcxz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xijvlsnx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163opsuvccb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163szxstepq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lzivvrtv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hcmyoldh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rmiqqbef.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nctpgcek.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163pimqvsjt.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cdzliska.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vrmakfrn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rwgpgidr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fsmnvrxk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zbovkmpc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gcrdrtnh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163fxswjphj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xakaynvh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xyfgvbnb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tghmakew.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hvgrbcms.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163hymhjeun.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jejjcypz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163uvpioknt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163uovkrqwi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163orvgnyod.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tmmmicjl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bobhycit.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dwvjkmrr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ytdhpubr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163bqjbxjvb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163exhmfcun.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163znvalvxl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mpupcavy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rawdsujo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jmmfkvwj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vlpfdbzd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qlldkuee.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ptkhhekr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ypllclyf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hkahdidq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163blidkilj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lqwfqhci.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163relzdrvm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163kaoznnvm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163bscjdukh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fhjmyecq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hrwujxux.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163oovfukvb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qpbwnmig.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hrkoswud.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vkrzjcvp.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ppghbrsp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zatgurrv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uxnglmse.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hgdagoxs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pvtjkslb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163srejhkht.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ucftnoym.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163amodcnzt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zkinfced.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xflhabnm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163uyjncjti.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ugeaqptb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163aincgxqm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kalgkhwg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yuzuplnr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hhjsocog.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163eolvppsc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163oaqbijyr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vvhstzfj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wpijvmvj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163gpneaiyy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iiruezgd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gnkqmfyl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jxfejokw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ebkmixjw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163datsqtfk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163pozqcizg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vpbhyypo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mfjrpoez.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163hwmqjiqq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163apewdvrm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163exxpjbkb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163drffgget.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mfjnbgle.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ibwnrohj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163anlmfbvh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ubgpwdex.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jyaxidrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163udkswsmr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pulkkimh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fbdrdcdy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tgvvjvhx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163bxyfvodb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gekqnrcx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163yiobowjv.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bdzlthys.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hnikphuv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wxkntdas.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qwaheaos.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pzvxdhbn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163riwphkpl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163esjrwmvz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kyipiktd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qlgmwmhy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rnehdxwa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dlbywprk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mpzjjsof.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xlgmpvmi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mbulskiz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163cgpisxbx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xtzwtzld.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vtadoqnz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fiuyuplg.html

================================================================================
来源：http://www.xuanzx.com/163xcwcgvwv.html

F. 文件与目录
来源：http://www.sxryk.cn/163waeitwat.html

================================================================================
来源：http://www.aibaodan.cn/163gqwcqtoo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163mhrbwwod.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uldakplt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ajtuqyoj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ghlumdym.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163uyzakpps.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jxpqnmdv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ccnyslis.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zszwwyhz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bdkimoyf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163sgcsamuu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lfzzbawu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vgiofifr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pzppmoke.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ikfykwdd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ooofnhrm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rvtjgroc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hbjthykx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kcvuqfgx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xwkxdnfg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xsvhtout.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ptupucrj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163recpnhxu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ljkmsfoj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lhkgqvuv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bganuxir.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ilqnqino.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163exiupbyj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tnlxujds.html


<!-- 参考信息 -->