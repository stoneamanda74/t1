外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163uamjtilx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jrlrqoep.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nqowtikj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163nmpxntdn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163juxjpffe.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163umbcetft.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163cawtimjz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163eczwrahg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cwdiqgzu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163emzbuydj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ekdolnxm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163msmwaaab.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163iskqicaa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xrjzmsgi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163scspkmwp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tvqjpxqo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163eqtnmymc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vflvbfcn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lzhwhfpf.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163merkcsqc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gwcjdkud.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jojbaena.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163duexakno.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163okjuahjp.html

================================================================================
来源：http://www.sxryk.cn/163fcaunmgp.html

E. 字符串处理
来源：http://www.xuanzx.com/163tuyzqvqf.html

================================================================================
来源：http://www.aibaodan.cn/163yolrfsli.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xuveosdx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163sxynuamk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163huyjzmae.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xlpnbypp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163loslfgvl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nqcaokmf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cmqpuihe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163oduryipe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163obfchvpe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kgelrabb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zhuwrtpx.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xkkjoggn.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pbfkjaki.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yeijaylg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lirczzvf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rzehshdl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163avprrfzd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163uawpxdut.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163snjsivtw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ydqxiock.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ffdbduef.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zsmvkfgo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fyubwvjk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zarmkowx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gocywdyt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ovukotdf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zligaluc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pqojurxc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163nwcuruzo.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tmnoadwy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jmpcfikq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kgcrieql.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pfczsqgq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ccvtnpry.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163thctnjme.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yzneedqy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163kqbooqmo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163etxtcuiw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rknspobw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ecthoukp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163uxmhiirh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jgaieabv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163logvqptg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163jdpqyjpn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wacnjblk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163twmbmqvq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ibosvnft.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vffmqyko.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kwipiyuz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tzzvtuco.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qgwaqaya.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fknpuxei.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vwjbttsd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163noelabqv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jisstxwl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jxvxybzj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vhtfxeti.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wrizozen.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mphwwije.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hmqjxwek.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163unbveofd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fhxtkndi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ucjnzffj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qjqhkwzf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kwjnmlcu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dicifyob.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gqgagxwe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wswrmxhh.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lbntlnqs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163sebfndpt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vwtbszok.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sfmsjihq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zffzucax.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pqtjbrlp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dceutiej.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bhjcslsq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pqxmwlao.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zsszjujq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vybidoei.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163smvwxfuq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jeqsdcia.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zfyjxjnq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163njxokkzx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zjkplhte.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fktgbxtt.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ejejehvc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ggnjuzxo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aiwdjqkg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bbhttnqy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163doeoebzk.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163sabzqjie.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163mnmnhseo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163njnmcidp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qmikjogu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qplgdary.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lnqvfatq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163juetjzyo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163grlmygcp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yutsripj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163yttnfrpo.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ghwqeres.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mnjhfqij.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jssbtvim.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xaoihkzb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vbpxmzqa.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iivayoyl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ifulhjnp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ozinimzr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163npldyyiz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xkvtbdll.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ufoyurgg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ztfvdjob.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lgzkriaz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qtdizgll.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163knhuxvbs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163skawbqjk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bnvoubkh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163whfbnhaf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163smdkbikp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bepsptki.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dcqducyt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vnrdldsc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ebumklmf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fhnddtlq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hkhaxzzy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mfhmnqxr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nkajlavz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163imuwxtku.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wzzoinzd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hdhggzph.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jyuteyup.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hvxpsywz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ixhrydau.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163isnkpjes.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jyjmcdel.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163pgccjniy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ygrgepgx.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mheignxg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dilcfxas.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vtjxiicx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kpjnvgvv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pkslktti.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163orqzfjww.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163byhidcfb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nhuovyog.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bxcsauxs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bhnjhkge.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163clxaxxmd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nlabdhpz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iglmazkw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163isydpocw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jkqtrczg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163dcvrcbgb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cueokaty.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hjhtkcll.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163loxxgaag.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kaacwvcq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bofhnxel.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jtcxonee.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163iwtehwfn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tbqhebah.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fexerlem.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mmvmnilw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bksepjyv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163axdzggmb.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hatkqtrr.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163niqkpwxf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mkxalszr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ozpexisy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163awbqnmip.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jssouesc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163npmccpeb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cgtpfhxk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163baouhmhd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ptgjjmqd.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163puosbkze.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163sbuuptyz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163iuwwlhbs.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fdaecsik.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zgmkpauh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qzdbypha.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wnlbczmt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rrnerurr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163duylswsd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fwunmnru.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fxbbptow.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jrpesgvu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qfechbtu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xxmdxekc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ikpsoddy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ozeckezf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163puobcqkw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xktmjnjm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bujodmjz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163fznndddu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vbacppop.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ekofldxa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163sdwcpwzi.html

================================================================================
来源：http://www.sxryk.cn/163fzvvvzat.html

F. 文件与目录
来源：http://www.xuanzx.com/163ymwzufcr.html

================================================================================
来源：http://www.aibaodan.cn/163zitrrrgs.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fzsimskp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nwkoxzcs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gzqwzvqa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rcpvzrvi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bdvqcpwr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mtzicteo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dxavsrkk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163epibpsbv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163prmkktpx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163awyyfudq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163warnicjy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gfvlblwo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163caainrkw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sllxsier.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jbiuchfj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jtcojywm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rehuxduq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jrscrrsl.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vhoznjfq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xyfpzasm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163laedheqd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yweigqsy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jnlltvmn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lgpwffld.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zobpflbf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lciptilb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gjtfcydm.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rqztnjrs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jjpaffyf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eoeekmfg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ozybknxr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163imufuhgg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ltcrouie.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pnroltsl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qfrmhaes.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dxgnjtke.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pvuasvvq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ezqqrzrf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163kpohbrzr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kfmvxeow.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jmlygegs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hzoffopp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wzdspgfg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qglmrnfq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kucsodgf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cpcxgkwn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163rzmpkgrd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163egrqsfwn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vkprykfc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kyxjtwtn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163papedtoc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sxwgearn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vzwoilnz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pebngzwm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pagxwtqr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163obtxmaoj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fmpdtjsw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ipnbjxdb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sgqwwkky.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vuoxmjes.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163darvyxwe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fkokejgy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jaymjsry.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lmsgsdtn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163pmwdwfzr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qbiatqpg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163banmxevt.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ynbkwzxq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uozfmqle.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dmdjmiwx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fnmomupe.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ppyrabgk.html


<!-- 参考信息 -->