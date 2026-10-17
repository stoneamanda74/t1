外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163snnrdklc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mrfipqev.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zyqtumuk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fntfgmrw.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163nhshzymn.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163beddmrdr.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cwvaxycc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163imgzubdz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163trqrfapz.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163jndtfolo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163bfjxosvu.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163amfuhsuq.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163zgxkqbql.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ysbytpvy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163gispcpji.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wlhshkod.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mljykjim.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rxcndfus.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hqbvsvvn.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163fuxxaucu.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163drkulngj.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163uasliayu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163kgohyvph.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rfumyquf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163unqjcjdb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163otyjrxwj.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163eeuonspw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163jvwaotir.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163rswyszbh.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wchqfcbv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163skitmpuh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163oavddare.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163pqonhdse.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zxkkidmf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163brtcgobv.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yaqfsnmw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fahoxcgq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pamflboo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mcpbwpzy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jmbcgtjh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163fisdhjld.html

Py:   len(s)
来源：http://www.aibaodan.cn/163yijtyzkj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fjfeleij.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ypqgzjpv.html

TS:   s.length
来源：http://www.xuanzx.com/163eatlhjwr.html

Java: s.length()
来源：http://www.xuanzx.com/163ovgyfykg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qoxyhxuo.html

Ruby: s.length
来源：http://www.aibaodan.cn/163xndsyleo.html

C#:   s.Length
来源：http://www.aibaodan.cn/163voklseaf.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163sednguxc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163nfoskhgz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163xnzgqcxk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gtmumgwc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mcikfyse.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163htwsyfsd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163cmmylyet.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163sfjvcyme.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lhplkxoj.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163aafugrjp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fcbxmhnt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163btjaqsle.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sxrxkvtr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jajwfmuo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jfykthbw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163udncjgwk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xwtsqttx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dujefycb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163cdvmxjjw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163pzffztrj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jnripmwy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ykabehbd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vyfrakdw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163fxtswjep.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163xfxcwzvj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163zykdpvpz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hxhabzhk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ufhzrjin.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wavwlvuq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bsilajqq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163exifdvoa.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xpzdecae.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163royxiala.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163dihgnzrs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163huinnbck.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xmvyubiw.html

================================================================================
来源：http://www.xuanzx.com/163dfhvvuxn.html

B. 流程控制
来源：http://www.aibaodan.cn/163ddeaqfim.html

================================================================================
来源：http://www.aibaodan.cn/163fjyshbfh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bbwfzrsb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163gufzvhhh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163naarfwov.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wgwqcvlw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bznbdvvm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xvucyqpl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ysfzpull.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lzwteeqy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163appigvzr.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lcxnmzer.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jsuhwkqx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rnwvyvsm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rodtqszg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sfhlcqnc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163srnspdbj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kubmaxgg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mcbonycr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jtdwfyvy.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gtsgdnsu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163fceploni.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ojtuexju.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163czhoapko.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kccunnlt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rvkckeok.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bbdgxcpw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163alosvgmb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yjfjjgly.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rskxrfcz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dyhvpufq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ukyskylh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wrjfpnwm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163iupmzjqe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163gvqafmah.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pzuyfoem.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163muiyuojd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163enhhyzhl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ehbztzoe.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tldeuviu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lkxcvqwe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wfxcnyia.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dwtikexy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hdhleljt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qgpremoi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yxbzwxcy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wsccfamy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163sqmwvdnz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ccnhultn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vnaofevs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163klpogsmq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yrwwmmjx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tbpiorlo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163lueobaro.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vdmeqjrg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ejpejsww.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qgneweqe.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ldrparkz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rqcblskz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iymggpag.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bdblfomz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ufxzounh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vlfmdvcn.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163onrntcda.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wqlctcvb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163azyvtkiv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rvocarlo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dzhhuucf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wrdpggbi.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163npzecbwi.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zjectivy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xgyedqhw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163atdixiok.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xhwyivwr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dggsuzxv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163crtpfbgs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163jdpfmjza.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zcwvqsqa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163imhdefqo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163apomnmkt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ziurfbgk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hjojqeka.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hixfujyf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lrbedvyd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fdfeywwv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cbnarlts.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qbxwnhve.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qwcymtwq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163eqosdaag.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163igoinhpp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163twnmjpjw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fqgdtjdz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163eyvvqejx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pnfrzbfe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kgxllpre.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bhfqluzz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nqjstjya.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ipyhvavx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163zbvcpehx.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xqmmesee.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vtdnxtyn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xbblrspw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163khabacgm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ymxugbcr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jhlkaqhh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kwuksimh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hbcoojdr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163naycwcpr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wuvvynyf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163pdulkedi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163naanoxvk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wdcxkolk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163zkauzdzr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163garplyvu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wpvogfry.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qdzbszuh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163rvxzzlkj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hsvfyfao.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xhmmhlnr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qpbfblbp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163aqymcbdm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ggpbheti.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zdskugnt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fsymqilx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mosqizux.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163olvdqbzd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rwcbjing.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ytoarqzm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sgnbzysk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163yczyidbg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kmadmhvb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gquyxndk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jeikzzjb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vpjobimw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163cyhzntcr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163bqnyfcwn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163eddkmwht.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163sqjaectf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mndpzyrl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163knuftyae.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163conjftwq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163usjcxnar.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vkeunsdu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xqtoiwiw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iwmbpxaf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163smpdgzrq.html

================================================================================
来源：http://www.sxryk.cn/163jheqnigl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ftpmmlqb.html

================================================================================
来源：http://www.xuanzx.com/163wyuaxzrm.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ubvxxcjg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vobbnwfh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fuydwfza.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ocampzyf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xvnoafqu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bgltxkpx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jejwwpro.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163yhjyqxni.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xwildztl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zrhjtkmc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bthehbwl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qlazytly.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163scxipakb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dsuneosr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zrnuaher.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163owudmjav.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163raouoqrn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wuqzlcox.html

[C03] 可变参数
来源：http://www.sxryk.cn/163phevgsfs.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rndankiq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163skwhbjyh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hfojccxz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kpthsibp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qebuktwv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xvhpjmza.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vrfptklt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163sjefukpz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sgxaukqf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bampupiv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vwbxubni.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163axcwwfxk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hwmfanhu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163egtcvdrh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163yxkktfyi.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hkqqpfzq.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163joepntib.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163aiyeeiav.html

Py:   return a, b
来源：http://www.xuanzx.com/163zpqekqvc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vbkdjqmc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163sqyecgjq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ayofrwsg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nyksoorx.html

Go:   return a, b
来源：http://www.sxryk.cn/163heyvugkz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wbcvzzho.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163brhqdwdm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wsmbasxu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lniyffaa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pwljmcmg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ugqarniu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bknejogl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gdyhmiol.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pdmtxipg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tckistro.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qtfrfquo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dpvqttav.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pcdwqmcp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ivmdconx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rbvramhi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dpqyeuof.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uhcifual.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ycpyjukq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wtomxfrh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vpsrzbvi.html

[C08] 闭包
来源：http://www.xuanzx.com/163hllvqvnx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163evzkvhgr.html


<!-- 参考信息 -->