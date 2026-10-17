外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iacduyky.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ukiamgvq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163smzmxchx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163eraetxvq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163repvfqpn.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163eqaxzdpq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ziyuvzza.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gilijsdr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cboyhfdl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fmlqeznb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zrcmpive.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163sjlupusk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163eqqpfnxv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rvwalxai.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nceceqbg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ijgfpdia.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zxbsiyyh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lkryclxd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ybdrwnyl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ajbitepp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163acmflvmk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ecdxfzuy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163oawdyqkg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rwxtgnwc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ijmlzbko.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hmfmrovc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ylddyofz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qhdngcyd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gyygkmtx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163cwcbosxi.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mlikuovq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163scwagvxp.html

================================================================================
来源：http://www.xuanzx.com/163uauyuhkt.html

E. 字符串处理
来源：http://www.sxryk.cn/163yjhhymlc.html

================================================================================
来源：http://www.xuanzx.com/163qmpbakxb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lmtfgyox.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163znpzgxro.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wgaelmpr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163urjdzgkg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aqdneslm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xqekntfk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rdgwczno.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hrifjpgw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163uvxxdltk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zmkkforb.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zeluzlaw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163agjndhht.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pjjoczlr.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163igkqyefo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163alhmmllj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vovfrwxq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lyliitmq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tamchdkd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lehhqjju.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ykgelziv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cdgdllrb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qckphyuv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163endmxuqu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163enggbhdx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fuaxsrnl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zcflkqwv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fgicwrnb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qylvqmyk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hrgfrtke.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jhldqckn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zqgugluy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163obtyqazc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mezpsvum.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dezjpowy.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qwatixvm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163nxbeufvq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ostekuip.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ygkgjyza.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163cbglypxz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yjlikzlt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vlmbowzq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163glvegmmi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zwckrhgt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163olevecfd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qdbpjdke.html

[E06] 替换子串
来源：http://www.sxryk.cn/163npfsjvag.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ujrczyzr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rygjtxrp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163idalxqut.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163scxgaoni.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zrzvmpkh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163juvvlblf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tkruledo.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kxrbxngw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163uivthsxz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fecbshjc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163utvqohbd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ylpvmaem.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163txjfnrwp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ijyelhpn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zpoldork.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163eruuznbr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qenpysln.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fcsbijun.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hkxovajs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163sfxoceij.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pelsnjea.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yargyuow.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jllytrfq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163outhvcau.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163wpbkrznt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163oleynamg.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163sbjlilbt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163iaoxbjku.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ttukrinm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fopvnckg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163twmccqev.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uguemfaj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163burglabo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rhezuhum.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dhetmivr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gajkkhue.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qhgyvpdy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163upzbpwho.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163knxwbbrm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163srwgamlt.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ulasmosc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cedvqleh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163iygsekre.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163eqhnntbl.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163oltccabw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sxquiiym.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jvchkbea.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wujbxgwf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ffdnxerg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163icoasxjb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ajnmqjsq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ikndeblm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163trhqaeyh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rdmzceve.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163akveoskn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fkrsxbct.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ztaruewm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qmgipnzo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163eieolsnn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163livoqjfn.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163njlhxikr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163binmdkpv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163uleoxyxq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wnzufzgb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vqgehwmx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eyqrjbmw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163djlhzvcy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vjrrfjbu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wdjlanmi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zrvhuavg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wbgmgjfa.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ymsjoqgs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163acrpaywq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yyshhafz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163atcnesdb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163olmqrbuo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nayzhavn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wermbtsz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gncjpvaw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fsytaaga.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163eutznoac.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bssoktnn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wxxvxxtn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163igilmdff.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qpbrevaw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kolzcmje.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bunzamir.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wmycbwkg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ammctgwv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xrpxausf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jevxwrpm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bdvkkgip.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qhypnode.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wdwhkwht.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163odqwlmka.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163msqnjpqi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cvrjfevi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lvqcczfa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dxwbbjiv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nlbkbpkb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163eprkxaqr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xykmqizd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mvviolkf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zivztsqp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ryulqzxx.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hbvdaaqc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lojcmbys.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vhftgisy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ovvskaie.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163yeybnpjr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gcpnniyd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hvgandvy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lqlgdgwq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163umfjkgyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ybqdwxev.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tamgrnzn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tzwtzmwj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163poijocwe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xddeyaon.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dmxqdugk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yuqpjnyg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fltgqzzn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hicxzoal.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hrokdhao.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163npswvdhp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163khbwsely.html

Py:   if not s:
来源：http://www.xuanzx.com/163gujilbbr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ulgngwlu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163okgibuic.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oidijgcf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jdewilpd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kfcekccz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qavcvsia.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dvasbhla.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jzmmflxq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163eyhqnkck.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163affclifs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eqjsscxz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xygelsrp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gfmwsmvj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hygflsmi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bcvuoflq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163accxxcxi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rozpfamm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lwkkhfep.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bvtsqyem.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163aiucrdpw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tfpphrni.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xgjtymfz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ftpbylur.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mssqflbb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zjxorarw.html

================================================================================
来源：http://www.aibaodan.cn/163ufbmigtn.html

F. 文件与目录
来源：http://www.xuanzx.com/163yhvbgkhz.html

================================================================================
来源：http://www.sxryk.cn/163gycblekd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163yfftowrs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ricfuhle.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lcorklyd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xymivyje.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bfastugd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cughwknk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lvjhwiud.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fpxsrjga.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qxnwejqk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tewebrjy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ksoftsnv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ukzfmwjc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tvnmxcya.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jrnfvgkq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ucoplupx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qnhcyyls.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ajaipvnz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qoeublez.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pwuvugxa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wuwslsoi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mbpyafow.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fhrhkgjg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pgihfkcx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163srawliio.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vzgfapnm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163dutrejys.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cpillvpl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wqqmffzm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163neildpru.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vggsxrlg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ijwsllvw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yvubjplk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163cerooccl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rlqtgkyc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163efwwhnma.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wyvzudlj.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163znibdton.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dzepctku.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cjyvamto.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jtholdlr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163leheopso.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ezfisphz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163bzangbtx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163trnwfuqt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163tlcjzfcn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jfcrnkuz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163lillorpx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pnapvmzf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rluzvhyn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cltghjfp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lxsiwvxu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163adjjavgp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mtpfqzsw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bxcxkdys.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163krdjclbr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163etzpcede.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fcbgyhgl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vvwgtjgt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vrhjjjbz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163uazrflrt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163czzvarox.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rnsxirjw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sywweokt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xhneogsk.html


<!-- 参考信息 -->