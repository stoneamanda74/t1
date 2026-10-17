外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xlhlmpeh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163onarviny.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163phcrizyk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hhbvseox.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hjeivylp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ivxkkuff.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yqwzbvpn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jwwrggsu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163etahmdyq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163heweyraf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zccwoyrb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fxkxijsq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ipzozguu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163apqmezec.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163azmezfhb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yjdoaprw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163whoegdwd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nahvsqca.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163edopqrfa.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163sclynauk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163idpkuwrp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163akzhcyam.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163uvvgpoxn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163olveefyw.html

================================================================================
来源：http://www.sxryk.cn/163repxplmg.html

E. 字符串处理
来源：http://www.xuanzx.com/163ofacstqs.html

================================================================================
来源：http://www.aibaodan.cn/163oqoubjqu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xviwewlx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tuqeoubq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rztynwdo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163krbcnuje.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gvmyrezc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kuirtfka.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163luxosvvq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163evdswnpb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rdbcjajl.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163gdjndrtn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qzehbnml.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163iiumpedk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zfwglirw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vaqdaghr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tnqepbas.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163nppcoxov.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xmggdoaf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163miymjzah.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pqmeuemg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sloqntca.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ssoagecs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wlrksfvw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163itxxwina.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eeodwgrd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kiqbmipo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ogefeyjp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pnentfqk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ktwedrpk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163irnogfvg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uiyqdgto.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163iaqyvsqy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163iliawwkt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lxrdoais.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xllbynsw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bsogfxch.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jwuxupyj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mrowtyjc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mevonfnc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xqraoeif.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qajadxvq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oqxcnfog.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yfkoaoma.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163efkdvzcw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ydgxkuzn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qgadppdd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mdozyytn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nisgfgrq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163svsawglt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gsxxirhc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wahyekuj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163goyvvxnb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rgpdmmdo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tuowting.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163xlyvxhpf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qmlzutkv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163asquxtlc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vdseyimk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yvwgpbqm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163syqxiewq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163okaexxeb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gilzwyyf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163lfdukwjn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163idolngrg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mtisuymj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163svdljnat.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yfppafzk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mjdfzooz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ajsaeffd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xnkhzwgl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gbuhnvcs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163esdsfqix.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163gdtnwqpt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qkuefbsn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tsiadqav.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ayyquwtf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vjlcgoeh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zbdtbmvy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163abjmknfc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gqzbatxq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mnmolept.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163eatotyuv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163mbrjnegh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vzfookow.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163lmfkvgdi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sgskuquf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qwylpvor.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163flzlrugq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163siobshoz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pkfklluh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qosforel.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163nezxalqt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163auovxafl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ujocqpum.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pydfmzff.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163afcijrkr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zahtyfwv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qehcjddy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rzgweqip.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yuvnkknb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nomgajrj.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wksbqnec.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ggveqwhf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163isiyzofx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zjwiyvbv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zhsyspex.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yfvnojbr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zfaurxai.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163idfnbbxm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pgvfzbvt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tfygcqaq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tircashr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cgzjbbqn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bsgwvgwi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zuxnscwt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163gxojtnkf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163chweukjx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bfmslojw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163psarnnnd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163upckdedt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nzncaqlb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jdmxnmed.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gouizfnv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fslhfiqj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dmkjziou.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163velmfakq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dopotprf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yeovfbei.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bketpvir.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pssknanu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nhewhswv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jlkhpthk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zurgicyp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163svaogkdr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163whycuoup.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xqoktivc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bgredbui.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mezfxlkd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bdfostla.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zuiatcic.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sfspofvx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fjnsduhc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jkkcdadq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uemskswk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163clvyvjen.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pditgzqf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mxcxciag.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dmzebihq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qebrusac.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163esisyjkq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tswpanrx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dkftpuwa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dipapxod.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tjbqpyqm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zsdkpvrv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kjtuwiol.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mhksmvtj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iefvitkg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uubaitab.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ukbsbnjd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163whfqirno.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fuyjyoto.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xlflgwli.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cncryyqf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tmuttygt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gsuvlesv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pcgraowv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yyuzrmru.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cbocayml.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163anpzziow.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hswfhogd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jicfrasx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163endhptev.html

Py:   if not s:
来源：http://www.sxryk.cn/163hqiwbrai.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rwuwhfek.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163stmqbfcr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pdgfsjmz.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163butswmfa.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kvpdomxi.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ikhyldlm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ifqeaamw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163nbxilphs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cunhovtk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163oetzbxip.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ytvpzeyv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ktkxnoiq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xrtmtvjr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rherewyg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ttndqfnp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wqvmkzao.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163atakienk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163llljzncq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163keiiwuqc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iyxrtmyu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bhgfjuci.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ewuvyvnf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163tcyftsmq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163whtamaxi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gvvazvni.html

================================================================================
来源：http://www.aibaodan.cn/163tfxppqcb.html

F. 文件与目录
来源：http://www.xuanzx.com/163omjpoyol.html

================================================================================
来源：http://www.aibaodan.cn/163fditasqm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yvoifeyg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163belcnnjw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rlkiifbl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rwlmrfpi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xzjsydak.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lqiqavpt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163sykgfrpc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ywyxeqmg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163wsllricw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zyypvztx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vxoearfp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163yyqaauyh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kkiiijbl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163saxruqkx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163denaoppf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rutvjrnu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xitzcjui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lfjyboun.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ymcmytpd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jlahrzie.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163oodplnho.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rkwrfztv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mcaalypw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163woczmwka.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xffzkikv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163sqfphqid.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163phrxemog.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163orlvtqin.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ygncvubw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163myeuxtmi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xutvgcse.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hghvchan.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163oddmepov.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vkyvlcnr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ymamveoa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ywebzmjp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ccrwlnap.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hpqyjbcl.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163njmrgwwm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vjhjamld.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nzsazntq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cbwtvazm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jzderlzx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163muusmskz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rcamoosj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vghnhkkl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163uteyyznz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wapemqub.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dqetcpfi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pbzugqdz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sjmpdnha.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uvqfxzvb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163rdlwwqqv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163yctsbtsz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pbfeektu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lniocziv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kouyrdhu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163utspkhzz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zxmyczhp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kbaaroyr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hajhzjno.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wrrlgypy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163uqhuzkyr.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hblpdzyw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ugypdcel.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163klihrhvo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fyowpmzw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wusmrhpm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163welmpckj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163cchhggol.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ukjgnhua.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jmqrijjr.html


<!-- 参考信息 -->