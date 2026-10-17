外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rmpfbszg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163duyjawvb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uellgdwu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hakntrzq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kuriyoae.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163sarnxwqi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rhjhamrp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rrpeckcx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bypttapv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jasobpxc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ogsciszm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dcksanaq.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163melqircy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163azsddzae.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cevdbisg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gwuggtod.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163nbzgwveh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gnkmjmsk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bodqosro.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163coznfwsq.html

================================================================================
来源：http://www.xuanzx.com/163candpmci.html

E. 字符串处理
来源：http://www.sxryk.cn/163bjgtpxbg.html

================================================================================
来源：http://www.aibaodan.cn/163hhjsadea.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zzbtoyyp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ynklqedr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kzedtojn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wlbaeufs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rglabxcz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yxnsairc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qzsumwrh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ptmypidt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163picdpdfq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vrbcujwg.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fajdgdsd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163inurmjlp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163iwzrgpub.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kobujabp.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mhevjgma.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163isqadftb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163olyebnga.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gsitcedo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163duhyjjna.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kgjdsczl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qndvgzal.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zgahsuam.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ftxjrhql.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jgpsllot.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cmukmlep.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163yyhayoby.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fzewynjm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vbsbmtqk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wbyzfmwq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ulnvmxug.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163imvaocsy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163naxvouyw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hkkczjkx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jcwxcauf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rthjhytc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uoivwdey.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lwhecqdd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rwltalfe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kmptkmdu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fetonabu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163augynkix.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yosjqfdm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qrxoodgk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mavkotdg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rqozipjh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kpupscha.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hhzyfjfn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rfjhyfod.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lzjramft.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ftgcxkdm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gwwiiffn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163smzixdpe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fmfywufk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kdjxvbwe.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lgrjsqni.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oemvccqr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tmrrdkrf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mennqnfo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ztpqfmes.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163atnvrkez.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xurjuvtj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dxeejtvh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gaxzpvpz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xrjfifhb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163skjefcfg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ibjpugws.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xsvprhni.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xdbwlmvx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163aggtasux.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tivqblje.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vrsyhugs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163vdlvrdqm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fzbytaes.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hyalkzot.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ytwfbxjq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jtetbptu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rbqncewh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wexmyofd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fobqlioq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dstmztlf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jupammgt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dvmactdc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jiiwhezk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ajagpvew.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163azsulyvv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163plfuurfl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xchllxcy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163avrdvfki.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163rlyzgkht.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163akzaabzi.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dtihmwph.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kaipoqla.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kqpybnpe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qzqrriad.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jjhdkntp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dtuvpbqn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163szpamujo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163bjgolsce.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kxyvqffr.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163aywhyvlz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163koaujxsl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kuacscbq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163weogzien.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pxfcsmtu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163opgcoqod.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jmvbuzma.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163eqbstnid.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lxskqpra.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163duxcpcqj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gszixxea.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163oxojvprb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163shporwph.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pafantix.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163flgwiaad.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163txnicwdx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ohtdeujd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yplrabbf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163llaguovd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jdxvkkpc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163puvgksad.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163piejvysw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lspvalgk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kaznbxec.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wsgjjljc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163flllhgvs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dahxiqjq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163uqxwvosb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bsuseezn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ekimijbt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ueaozjfc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163osbkomma.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tdtqwgon.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163raezfnwi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163oepvwois.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163yjicguav.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163juqvkolb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ygbfalta.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vxrpsulq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163efnskzyw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zfjvfmtb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bfxxpbtq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fhnlqbhk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163wkvhxjrq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163isvnbvwy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lmphfecy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zvwnybba.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rjdxwplk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gfptxpge.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yjnboonr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wvdrjldv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163npclkbla.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163qxhehucv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fbaoiqxt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xobzfotk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163sesqkiyx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jsmbkyfj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gkorqoqc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ysaibfqn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qqbxrrei.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mfwzyfgo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bssrfzhw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ntumargs.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qvyrnsuy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163wpxfsvyl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tpbeacbe.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pfstftke.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iomagsgl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ilusvave.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qzxjidul.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xoirjwwv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dgbjvnoo.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zryffmjx.html

Py:   if not s:
来源：http://www.sxryk.cn/163gtzosjzd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163tzroalfb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dssvcbze.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dwgqfcnu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ahavussi.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163seqlxzqx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mwwbpvdz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bnfzxslc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dxgmkkac.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ktichoqu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163abtxltus.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bjmanqbk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dmypetgb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163supmkjff.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xvfsgpxq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wazojcwn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kdsxxted.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pwvgxcrr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wiqrfjmw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gsmbubgn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zwwahqhu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zlceisye.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lubnexyi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ujoqjupc.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163butjwoar.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uoexaaup.html

================================================================================
来源：http://www.aibaodan.cn/163kxsltkjl.html

F. 文件与目录
来源：http://www.xuanzx.com/163lizhjgpw.html

================================================================================
来源：http://www.sxryk.cn/163tsfhmjxo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yencnqlu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gflpnebj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zaqujuna.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fnzhjzkg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163onqhhxof.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xlbivqvd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bwzetkga.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163apyizigd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163upauirvo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tvopdoor.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uwcvbpju.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gaekfwfq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mstyedme.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rntnbrjc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rygqvwiq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vnalplce.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jdizqnlc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xtsuossw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163anssoxek.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qyfqkvym.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jfcwyolp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163foyoflfr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ldfljbmr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pdpurdxt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vpheiowi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ggrkqhws.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rmpthmnm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tqwtfher.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lvynkpeu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163kdlwjbtz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sbsdiiye.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vzteqlnw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163tpantbmn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dinreawo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qdfxcqlj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kzyreswz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rqidkmjw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163aoakcjdd.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163woywvoft.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tfdlaoai.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cserpcyn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163myncgqnh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163axrswdwq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163udndjzjv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vmrsukhi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kxlujgwm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163phzmdluu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vucdnggw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gfeszkki.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gwyxeknz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163awxbupws.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dhdckxdr.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nqnotukm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kyjkqbxi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nqglmhag.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dleqcyuc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kygwehmd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vcvmsqww.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lgdonzdv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163avjppran.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163uyfmpuxq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dpcethwa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kemkkeli.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163srudpgfz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pnoejmjk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qfwxihyl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163orqhvhbp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eiiwyjec.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ugaikcjj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163omfbghqm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163biuorhyb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qnyohnvr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163unmljdlc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163tdtbhzym.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163unwcpwoq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ofttxlsy.html


<!-- 参考信息 -->