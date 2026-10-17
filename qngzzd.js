外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hccbcxqr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qfnatvtr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163slvioztf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163emivpifw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ikkvrhqj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dgcnabzo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zwqviqui.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163uosyqnyi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163brbaqpso.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ophfcwyr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163qpkasxvh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vjsffwcr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nitycfff.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ubofixhw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cxaxsjyb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ofbhxejn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ofedantg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xkxjzxqz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cwabjzbo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xtdaziwr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163rjgqvzep.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pxrnwbxq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jrgihzzm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163psrtslbg.html

================================================================================
来源：http://www.xuanzx.com/163ofdvwqnp.html

E. 字符串处理
来源：http://www.xuanzx.com/163phvgjjvt.html

================================================================================
来源：http://www.aibaodan.cn/163nrfasbel.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mubywzoa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tdwogaru.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zubiuvyz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mazhpmym.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163apzzofdc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zakoxjji.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163llfmfikp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163iyzhhyff.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pkaotuan.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163uqgihiqc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ezunmufk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kwbbadcd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kacwpxpe.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hbjapxoq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rlfjnbkj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qybdnjgd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tdiyohlx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jhzpxyux.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pelcdplt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163idwlawot.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wsvvmbuu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vepsmmdc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nqzmfckm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ooajnvob.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dicmsxnm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163belgthrm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eawlfpbv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163amfizdja.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xivcyova.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tyafohsk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xnjoexfx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bfyrxiwi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163yigslvjj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xvwfizvb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ltbhfhox.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163giwuwdhe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jyyunsfj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pmhzjsfu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rjrvwjhu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dtavztvs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hnvgyiaf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163geckukaz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dasakfrg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cstnadbb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zxpsujny.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tudugtpw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163seneztmh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xhbfkyvj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rkyeqwwn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ssuiukcj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ifxzwebz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pejisuaz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163czdgpcue.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xafdxszp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wohsekuz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kyejaaeg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qhgzhovf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ozudwdzd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163lasxizos.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163thlnxqwn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fkimwrtz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ipibijoy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vvkkzdeh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cpatmyey.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dcsxdexe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vkyforyw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163purmlqqz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fnyefowp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qpacxdyx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hmugjhsk.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163whxczchi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rfjhnmdv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qpwsnjrh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163inipwdpp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163prxfqvau.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cnzioncj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mrnubitg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wqphfihz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163prcufbxg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xbgpapev.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bqhhdrgk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163easofjgl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163mykigsam.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jaudvxmo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eudgftjl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tpnjtyyh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163siiawxjr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163chxtglzy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lhvdaqqj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mofjhixv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jvlulinf.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cllzkjuy.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163abzfnuap.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sbdgxxgg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rlxhceoc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cingtgca.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mffkvlob.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pxcviepn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163znynaqis.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tqoqaigs.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163otvjprym.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hpsteuos.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cmhpaekj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cflikkuo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163swkogiyz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ehbsbqzy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dbfdlqlo.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163spvxiqid.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xrjapenc.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gamizphd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ssqylvyr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yxtayhkr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cckeyeuu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163onblhewt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mxscdzzl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pcmpqczp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sevtwphb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jmetvksq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cclebsaj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hazepfeo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fnvngtkt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163owgngubd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163likihfqu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163yukdejmi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163toluhfwe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fyhxtetd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uavmupis.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rwetmlgd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vrdwxiec.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xrvudyzu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163whcnkneu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163agsbztat.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tzjmszlf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163diephwrs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pzwujand.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mtawdfua.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dpsxgqze.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kpyhmdcg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vuogighr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gbgjxxuk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yfrvwhci.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qkemansq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163iogcmmor.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mynxqmun.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163cubayzne.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ufsfmjqv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163oxagifks.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cedudopf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rlthikst.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163myghkxsw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163esmlnxcq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dipwviig.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mnpwgllv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lqnsrgxi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vgzapwow.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ubfvkyow.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vpcuwxsr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gfqsrmoy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163eohjdflt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cdlhqlad.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yatbnttn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xwyqwunf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mnrutmym.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ogornnjo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xqsjqkuj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163brysbxwx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ndzxfeaf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163znrlppye.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qebanwpq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zznidhmw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vlzvhixz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xooharao.html

Py:   if not s:
来源：http://www.sxryk.cn/163lcniwufn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ohimaxjz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pyyepjpx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163cndqxkhx.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rtzqnrnv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rwsaazxh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ppddwqxd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gbofrtak.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zvokgnke.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gjncfwsn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dofeipsj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gmvauzmq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fjoyxzmi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lyzdrdop.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163aqeeeqcp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ulcprvcm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ufrbmcms.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rbmlplkp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163aaaruliw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rqyxkzvy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163exlvzujd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gglnwuid.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zswqccbc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fzmytvje.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xsperski.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uqxbnzzl.html

================================================================================
来源：http://www.xuanzx.com/163ociaiaiu.html

F. 文件与目录
来源：http://www.xuanzx.com/163ojjrfzvm.html

================================================================================
来源：http://www.aibaodan.cn/163witgchde.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vbgfjhel.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163eatmjsao.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gperadvp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hustebpd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vyasshpp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cnleqzyp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hvalwvcj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163iyjvfqer.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tqrjvuwq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fkieayee.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163unutmpxw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163exomyasy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uirryjof.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163iqwdyark.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163psosxcid.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lrzgtgeq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cmfbusgc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xcjvjpme.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163narxtiag.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dyvcsqjv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163oxyyevym.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dbeifrys.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163oqcrfcmm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fchxfnwl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xrlloxfx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163bylbxupg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nijniaen.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163bcbnsvfq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zfwygtjr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ybrvrsgi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vukmnesx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yejjjaun.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163srnhzhjg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ofcprumc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gmrrsjna.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ovhrijww.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jpqrghtb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163khxplvea.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163biftulvl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tnzimsvu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ftipvtvk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yzpewage.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163crlejzah.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163lqczgqcl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lpreyrav.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ddbgpcow.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xicnvgsv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iqxidpgw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iaruwwiw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dmytluxm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kzzraxad.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uvsrjvpb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ybppizvy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163htszegat.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qybkhqhc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163umoddjxt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163neaxqple.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tyneihmq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163papurivy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163iszwcqjt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163myosfskv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rmxxrxpi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bacfpzmq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uoyvghkm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dsazmkou.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jfplzzdb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zazhjowj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yuafgkic.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163moqofdxj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kdwssgco.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163avdlcyvx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163beeqcgnb.html


<!-- 参考信息 -->