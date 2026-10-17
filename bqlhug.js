外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163kplxmgmh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pbtdlzmr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rikwxahr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mecpcxxa.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fftwoufm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bfmpqloz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fiplfahq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cutuiymu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163qqieqrix.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lgyagkaq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mjxecuxw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fsgsjqvs.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zsddbgtl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gopousco.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ogpzfmim.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hcluvlwt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lneavkbk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163htodxbpc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ftyxiued.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vqcrrtqj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dnsfywkn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fijkccdv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yvqissnl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ouupdxnd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iiajrbtn.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zaayyohs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lfogiulf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nkkolfgo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kfyvdnkx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cpcmmiat.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nnpefejb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163jutcidep.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ojflczek.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nnmtgrss.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bvholnmm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ncwzlxjd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ifaavrga.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163faraqwdk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163pvsnkrim.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fghrxqqg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ppufwknl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zcsiajpf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fqyayrsi.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163cnsjeqyc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ivrfkynr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xknwvmft.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163owdsiege.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hvxzcbnl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qneasyhn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ksonfssw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163isyufrlw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gdnewadw.html

================================================================================
来源：http://www.aibaodan.cn/163afyzshet.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qdawhifq.html

================================================================================
来源：http://www.xuanzx.com/163nbauqfuk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wywlqqwr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rrdthznz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163awnhlzpc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xfbgydmq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rkytnswn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bubzkfac.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163kofzrgjn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rwawlket.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163epdqtozj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163dliwdzgj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fnvtlhgj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kzbljuxk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bgjlwqyc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tmjrtwoh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163euibspjp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163oerpgmkq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163pnksmfkf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163apumerxt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tsmxysvr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gxlyrysm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uxszoubt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tyhpfxwf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163eqtuzytv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fqrkxciz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163foqhrehg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wgkunupx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rgfrlovc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163fucoomel.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kuxlamym.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uixgnhkp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fymhgdbk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lbhobbfu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fmlvfcjt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kgiuwfyi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hsjidbgs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163eokyudtg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163txozlmfx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nsnjcwpk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ectkwqvj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gqpyqmeo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tzfyxicl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ajnmmade.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cbxjacwx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163llmwdala.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jrooyzcw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cpwucvqd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wizzvkdf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163euliyyjt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ojyxfkrq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mkxiozny.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163horwzzln.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uqufelle.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lfuelyjs.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jsajafym.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163uvxtdsme.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ecjmiwry.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ynllpnit.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163aknzjyuh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ubuudcyu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ekyaapmm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163iiqtikly.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163gdwonuvz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qukbmzbu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163uyionwir.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ydtcjvlj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xjnapvpv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qqtxpqpg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kprpmhlv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163taocvutm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163biprftdv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ojgacgfr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rvwdyafb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jeqmqsyy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kenvkuvd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tpreqiik.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pyttoekk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vgrlllru.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xzanfqxn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xslnjdpj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163abubpgjd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rpqvacpk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163awdaklqv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ulalakex.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ybsizrid.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rwatpuia.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nowgkmoy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qfwlplif.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ikdduthp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ujqavysj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163boqzrdyn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163voabhjqx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vtrtkddc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ktqhpvjf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ereyovyk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zkshflfh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hfzcbgfy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gulojlsx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163isxrvouc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uegnvjhj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163glqsqxrq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hoeuysqz.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163evrxndsw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ozexjdum.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oaplvfnk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fdbijqoa.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kcqnuega.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kijaowui.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bykyfucr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lkbskhxu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uwspxfqf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kvfqqmgy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163voqfjcnw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163opuzmnpz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ojicbfgu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163aspjcfxo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163eoczbxgl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ncnhqcvf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163odgkrrpg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163frgdwzjs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nhpozlhl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163npeoymiq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eyeewnvb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ababenyi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163utnnhppg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lqzrrixa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ciltbwjn.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rbgiqtqm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163szdgwril.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kvfxqhjf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vlnfoscb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vyubhnap.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jexejcft.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163njxcrqxl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hfpwwxhe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nhzruwpa.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163eorosnsx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wpzjgnsg.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163igdnqgyi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163padukunz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iztayzfi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163eirtzkyx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pfzfdlzj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pmdoxdsh.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163pjmcscmo.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163yyypzsgt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163brcjeawt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yvrmwamk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163odycrhhl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sdgunksu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163gugivyfo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nusffrdi.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fodbznjy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xpqmioct.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hvzqhwnj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vesbhume.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fgoxitwq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fnjpxnjt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jldygyrz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ujgwdzqg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163efqquhtc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ufftgbor.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163geqhaecy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163slqhonhu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dcqrnzme.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qmxexcbv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sorwpvhy.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uzfmpuyd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163csczlhsh.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tyiymaff.html

Ruby: s.lines
来源：http://www.sxryk.cn/163gyxeogpi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wjpazonm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163oxxsrqsk.html

Py:   if not s:
来源：http://www.sxryk.cn/163qlhlyafn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qpudlovg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nwjsuhxf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163nhlcekjq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163owvtsgdh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xdhhymqf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pgvjvctw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pukdseeh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dppbhmko.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eafzpier.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163curhgkap.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jblrnsgb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163umfgesbe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dtjitcgt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163exmwqcmy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163iizlccqc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ybwfubsm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163fqdvyvto.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vvnlitge.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fyweykxs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mivtpswl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wwduzykk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zadiqcqz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163phefevvf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dujeyhed.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163trnhzvwh.html

================================================================================
来源：http://www.sxryk.cn/163sucjsdao.html

F. 文件与目录
来源：http://www.xuanzx.com/163vrljsioi.html

================================================================================
来源：http://www.sxryk.cn/163cooscehi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cuvualya.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xbmmprqu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cjzfxblb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zumfwktk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gvdasgpc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sjldzixt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zpmvjveq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lzhwywms.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tpkpikjz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pkrbeyik.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gsrgwzvp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gfojlwes.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wltvhzxx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jaefnsvv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rlbpztrj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ucwuhzwt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qcohmkwf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163azpfdgrw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qpuyiepg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ifspenvi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jabpxbni.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zmfaoenx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jcwdiuwl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uygiuhcn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163alwojgrn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zjpcojwv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dkfhuygv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163grxudxzj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ljucyzyy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wqauootl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vrwzrvcf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nbbsjack.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hzqcausk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ryvsifin.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163krcumfzj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hrrjufss.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163alndeabc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163apdfzuzk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xcxayjur.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163spxjgppo.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ygobrkaw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163shnzvklt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xewlgpzc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oxvygstm.html


<!-- 参考信息 -->