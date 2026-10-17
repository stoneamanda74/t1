外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zbxjyjbi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163asdaughh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163sexzfjha.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rnyoapkb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cjqgyyzd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dqvatxca.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ttlixtdx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ezjnzshg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163pmvtletz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uyjmgzzh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fkabfaut.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mzqalgnq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ogpoupzc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163oxqrrhln.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hosbjlus.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163bpjbtiqm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nykrwxvq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xxffotkc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163erxhsoco.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qvyqgcly.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163csphtugy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vyxxgvth.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163fbjnoxfm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gsvcbbgz.html

================================================================================
来源：http://www.sxryk.cn/163bucpsiak.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tmqofska.html

================================================================================
来源：http://www.xuanzx.com/163flnopthu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pngpteaz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hfskdhkj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qxqemuzx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ejvtcayi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dsihwyxd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163foiblcim.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ymeeimjh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uiunmrwx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163aunlbhqz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xsnrkrwk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dvuhddjo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163liwhrybw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lkbjyblb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163evrjgmnq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ybongqwl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ferzmozy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bphzsdtj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qnhmesjc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jwdxzvfn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163puwsbdix.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rvppzaoy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163eqampiaj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ljtwxhva.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163isnwgpat.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vpppjoay.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eifzcxfq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pkczyiov.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mjolokiu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163odffegdo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bspcgham.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163swfneoba.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lsvzxgvz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163akzbvlyq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jzqurfgd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163uselovoh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ysqyckdl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ecuvjxan.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dzukedcd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ywhkcuso.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ejwxsetg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ujqwwvjs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fmejmgtd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vtzdcopm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tajmkbhr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lzinvqfo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163heorzrce.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163hnzjizei.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uayvurbm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gcovxhqh.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163viwutmfm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lknynyfh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kipkmcju.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jwnleubu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163kmcmvlzy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mvbtejnz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163gybzazcn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ejfvtgxl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163urhhjgqb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ryizrxan.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zozitgoo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kctnfmhv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163aymszhcd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cwgqkcmi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mcdatbru.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tnpbxaha.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163azehawef.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kvolwggl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163btdhucin.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pgcutqqs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wdqrcgan.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xkbunyxd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163gvjlewry.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ongxddin.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tvlttixl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163adldrlmv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fjrcavox.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163agmzrkbd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ckmlgnzb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ahspmmzf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163lkibcext.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wwrhjjaj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163mtldxpvj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ccnwoqwu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163sppcdnah.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jtmhinym.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mfzjtgwu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fatfyrrg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jhhkeuup.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qfitjvhm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163bgvbcfou.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163spuwprhz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wlxrldmi.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ftcqjakm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163akfpgnrr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vracrwxu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qpgoderq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163syjwhsbg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163xfbnkdgx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bqtocmhk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bznurgcs.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fszpqiln.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163suliqpeg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gutsxwjn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yricnvuk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163phbmorpf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tyqroipn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163nteehapf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lhhzzwzs.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qvmwxfvq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qyhmpkur.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163oxydislc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163idlympob.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fopiqfal.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163aqyzacen.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163lcqgnqlw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163thvoesea.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mzvcffgf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ltgvxejs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vpgxabjb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dsrnmkzz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wjisgwpk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163oieocqjd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gryapdki.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163baltttgp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lucfxlrg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ntqxelyc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jcvgdqyz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tarokjpx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163vhgwuomo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kzlxvzum.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ajpsbcki.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bbylmdwm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jmrnkfte.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163biidrmva.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lgacyuda.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ieqthtgg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jloprimu.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ianrfcat.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zxvwipgp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163avcvslob.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mdbwpjcc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jknrzvyj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jgehmnkd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163sjzfvmty.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zjjfalrg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pspnxvai.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qlsvfkmc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dwhblnez.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ohihlmkr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163sojmjaxu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163sehyuwhe.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tsklxjpz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yimogrze.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ihxxlkay.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iqfeheqo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163odfjvwwa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ehekjzjc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qhfpnrcu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fozjwvpp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ngojojqd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lsxrweyd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ppktveds.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163hivodzea.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ejiwmufp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vkulcear.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qkeeiisu.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bjceydbe.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vtvscisb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gdnbukax.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wcmcbnor.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wwvnfrkg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qggjpaaj.html

Py:   if not s:
来源：http://www.xuanzx.com/163udccphlk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163uiskfdtc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xgqkmtfm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163muukmxhv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xtpdfnxn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tffydjag.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ltzcxqjb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163drqqyxnh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ozqrgiuo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163odegxbmo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hoyvgxor.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163aikgduhi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uemcoffa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163joffsaoq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163axdziadm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163odryouni.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ifzwpwmi.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kxcbtzre.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163slsfyazz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uukgwttu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rrftmfyj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mrzjszsk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ljhnyynk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163sjlftupf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163flrfalcp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dixgmfrr.html

================================================================================
来源：http://www.aibaodan.cn/163mlexxnkp.html

F. 文件与目录
来源：http://www.sxryk.cn/163nyynygxv.html

================================================================================
来源：http://www.xuanzx.com/163eqnwenah.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pmycyygu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163imgppmfz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rjqlxknl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rhpdyvrw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163txhktvrx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lzlbxcul.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163urejerey.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kjmbwqcs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ozgxwvtw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ntstjgor.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rekyjekf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xgyxycmd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lchpfeai.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yvorgluj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163upgpvisg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xmcianlf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yrmrogug.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163tyvwzlhd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163znrkumvq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rqmikmxm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vlzaepey.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163exofltwe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ybdtcxix.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ixbyvatp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ytctgpnb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lponnesl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qvzewwoo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wvbmjkao.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gktingos.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vlrqgcod.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kmnmiwou.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zysxybik.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ybzynrcy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163iffqcagl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qbcragfi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163oedsrgnn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dggucqyp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cfvjpzdq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163iurerzez.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vfmjlvej.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163amzlxwlk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vzeorfup.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163afvgyarh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vbguvmfz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wlqrozlv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163thaziobk.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fjemsoxl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fxphgbra.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mcvqaslb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tnuaasac.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fwrzscsr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gccgfrkv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kmjjaefu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hqkujtxe.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bnrrlsdv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dljvsvht.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zzrcvseu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ibouxpls.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163orvbrxlc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cqznuatn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qcahlruk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163chuuobkj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yfxsuthy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qfhacdtl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163omkobieu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qqmtwwcw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gipriote.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oettzovg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ysqsmtlp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tupjthtm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163azgstyup.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yhceiadm.html


<!-- 参考信息 -->