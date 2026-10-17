外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163pqqwzpjo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lqdhlwta.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163kgtyyacm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zkuydbum.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vjjwqwqz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hrpeiqvj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nyfgbyab.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mseyxzmj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163oqezlzsm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tqmcdftp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ffzwhogc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pojnqkuv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hlzqozpy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xptckntl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vgigppeu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163gwymvvyd.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163hsbtskoh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rsmrhvih.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gwyulmnn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kcbzdhzo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pwwysilc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fwxzpmjx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163opcovuik.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163kzzdzzbd.html

================================================================================
来源：http://www.xuanzx.com/163pbbbxsas.html

E. 字符串处理
来源：http://www.xuanzx.com/163fspqioqa.html

================================================================================
来源：http://www.sxryk.cn/163kcyjtyya.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wrrospon.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xkrcucjh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163didlkurv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fvmlekhr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163noyoqfwq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jregejch.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163pvwffrit.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lbhrnibm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hhhrtdsu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163buhyjsfd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gltdajcr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163feggeslj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163eytutbsp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mtnzsjtp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kldnftog.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ixsjizzg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jbenoszg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dvpkudpm.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kepdkztx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xioxjeiq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tucxmsqi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lcijsipu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qgohqvbg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rpoddmne.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gqxrcnjw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pheyttva.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yopzcnsx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wycbajgt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163doayjqfv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163npgojrcc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163figaetta.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ndobwzua.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bxoqklhu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mqsboisp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yqcwokka.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lhbemhjs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ksjsdniz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163krxvvpcl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163komvvjdl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163axklriqh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tbtxendr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jyyblgvy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163otsyitsp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163fvajceip.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jobjmtal.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mnnhxfju.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mjxodogm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163owmgqxxc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xsqhwtlp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wywhodsn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163atsvuyqw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ztnbndjw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wwwntcfr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163avmdohvq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163cljpyfgc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vrqqwzzd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163clucrieg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163szkxercq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wztbwyto.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dnrovjtf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qakmszcq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dkxykwso.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163uvudsmow.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ssemtkse.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eisnapch.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163aebdnovv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163npayldlc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cptvffwp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163crqbsoci.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vrfuzhcf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163syswoimj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163oezbvadq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ngblntwa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163stxiwren.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eklnzcwq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tuuuteir.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rvqtxjzs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jtdjbdiv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163izvylnuw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ljnvoiae.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tjtkvtrw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fxdjytgr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163epvttjis.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bhutucfs.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zwbtpmqd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aadnkrrl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163chcwolaj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vxqpgidf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nvujltgs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163rbkmqbtl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pwigqpvm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ddioprxn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ykpydbjk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kxcxcsaz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163exgwqepu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uunmvgoi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163boylniul.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yzhvqtdr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163feujapfu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dnopchge.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wxixvyzc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ebzgzbpp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xmodbgnu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bbyghdkb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gwmcrlbn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rupbmxjb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ptvluxhy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wuhkqknb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163upxxcdmb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163itpeglop.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ydgstusl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rczvplzb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qxnevssh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ditidzok.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qvijkikt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ozxtaype.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sghlsltq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jmmmntot.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xakshnut.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nqqbezil.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163sxsytejp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163oknuwqum.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hcyeixrt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bqphjzih.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pvagzzaw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nclonhmq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mxjfcsrl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yrmkqasd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ukwzudnt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kqagvmvc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qmgonybr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vrkpqkea.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wdplvhnw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163snuaikak.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ctndiazp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163boqvqhlg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fjeeaiss.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bprzfiyo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oxbizagk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vjilayys.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uknwzddx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lnlgxjec.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tsakvtvd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lscdzobp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xxzxxjtr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kggisrua.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mptctquj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qcnxuevb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yvfbsejw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wgscnfxw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wnpefikb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hsrkhhxj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gudpqikw.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lwhupdku.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uppqiast.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163eetctfjy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vxcnlpcs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163icmsirjb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yapntjff.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ovcjaeyj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eovfpixn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nhpcmnej.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nobmyiss.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xskjzdyk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ephvaedd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ctmoqhop.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jaojqxdb.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gpwzhtwu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wwrgyxan.html

Ruby: s.lines
来源：http://www.xuanzx.com/163tzxmnoeb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ggzoxhis.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ehuofjfv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mqhrcfqo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jqxcxeax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pxhynhzt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163olwahywc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bitetzca.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163namajake.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jehkoljl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dfyzdqkg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dbprulvh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ewybukpw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xmikpsug.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uddyorrb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kxhqhxvd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jmzljjgj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ziwcthhk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wcrwdrvl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gcbqxquq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ewkszyqx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163szpyjkdd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cayyuzkf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lqxqatuz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ojqpwnop.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163samtkova.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163czujnscw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gauvidsl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163utvxtrhp.html

================================================================================
来源：http://www.xuanzx.com/163ippoiytf.html

F. 文件与目录
来源：http://www.xuanzx.com/163lccbaxas.html

================================================================================
来源：http://www.xuanzx.com/163ypkxqdfj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pasokxnj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jlijsqbm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cjjytxwo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163cndzjbkt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zzpkhdaw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yvepmnpi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wlvjfffo.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ckmkpfms.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163aucronji.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163poahaore.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uwvomone.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fwasncah.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163itjlozcl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163okrrejgg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lduaoguc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bpmchchu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163oubfgcnc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zvznacjd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jguyspoz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163bwwxrhum.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cygyahxl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cgcidxke.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qsrmpwdi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163hdcbrqgv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dpxlbzfz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wcjuejrc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mgcihmba.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wejkzpqy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ioyodsqo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pirpzgae.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163deceuyqr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xbqvcbli.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hseeoixn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xzxrzvah.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zjwgjydi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vlpijjrh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vwxduxgt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hpffvtlb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ivzmqpdz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wkepwurk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ehnsyzjt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lidhjtro.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163wfyyngak.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uirgwufn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163njrdtonx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163twvrsglt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ifkscnor.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pamicgoj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ukqiqekd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tqoiqgrz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jpnpcbsr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163smwwqmsx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zpjquybz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hffjshjn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163aqlhnvmw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ksnrwytr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163aznfjcfa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tthgivfb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hgzuxufs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pufqpqjm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163vdhscmba.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xxznjben.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xttjbyhz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163skahnlvz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163smkaafrw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vvhmjebc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xkfhbsvn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mllsbmwt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163czonmtrq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163czuwhxia.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163aenfeecd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fxpxhbri.html


<!-- 参考信息 -->