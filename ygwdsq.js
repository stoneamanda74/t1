外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lrzuokrr.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163xbbrqzxu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163thalbwys.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163quhrzhbj.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ixtawaej.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ousntbhq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qycdddit.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163wqoiroxu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163sqtmzvtg.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ldedzrcr.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163zyxshfif.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rgzfssfl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dfmjwldk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bkphtkpf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163alsatqtl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dfxoddqa.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163oimtlwsa.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wtzsqpqt.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163rtsnnsli.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163miktgqfw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163roxmqwpx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163smquglyy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ijgujnon.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ismbhkdv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hselygcq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dvabqsux.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wdirerev.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ptkbqseh.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ejabuoph.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mfzfuitf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163dcutekro.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163uxfkfxij.html

TS:   s.length
来源：http://www.sxryk.cn/163lvxqfift.html

Java: s.length()
来源：http://www.sxryk.cn/163yyynjrrl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wwwetdtt.html

Ruby: s.length
来源：http://www.aibaodan.cn/163hiciwaiw.html

C#:   s.Length
来源：http://www.sxryk.cn/163mixudahe.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163kgkkuxby.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cfmkdjeb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jppssqoo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163irghmpsg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163umfdtddn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qrptjunc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ddhqnrfa.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hpvipnrq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163iaymbzti.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xcihgwxz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hqtvudaq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qklcxjcn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gnrkpgug.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sxwpsoba.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163kdyelfrk.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163oekywemx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qznmtcnx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xwbprelw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163qjrqkvqy.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163rnsngftf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rvxxzbtw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hwfnqejm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vtsssbxv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nvgtjktd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ancnnjxs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163gybcxgdh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cljrguai.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163mdcmoaht.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qzmscyje.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hgphorxk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163teamwnrn.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163jdtikjqm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kqblwkkm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163fhsqtmjz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163iamhkgep.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vltfemny.html

================================================================================
来源：http://www.sxryk.cn/163vwsxecyy.html

B. 流程控制
来源：http://www.aibaodan.cn/163ubglzhhm.html

================================================================================
来源：http://www.sxryk.cn/163bpwvruui.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gmaiijfv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163sxarzplz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vcglvblx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uryvlaix.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163woyaotio.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qlwigfmx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163nnxcdyhu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tfpoxuxs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163waragccv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163kdiiqkol.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163gjapoyxl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163frnoocym.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163blxbpeih.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mbnrvsvm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ntlpbule.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nemnipgj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fofuizdp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163czmicasd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ezblucrv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163yyudwkdj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ifvnysii.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yxeaqwwn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163czegozaw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bwilmszh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ozcrljzo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zmdshikl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163uiktacgw.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zwyeysql.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163isuvqhsu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jrmygfma.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wvugbnoq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163agetrpxa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ppvhynty.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vwnlkhrp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hdkuftuy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163utjkzrvb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fbtrclij.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nvucwrrr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ozrtggwb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dzcdtibp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pnqmjuus.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ntpwican.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qvuwvpzd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qoviaidh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bfqowpai.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nuqdwpad.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ecfkvjho.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163usykcgcf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fmodefhj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vhzsjrjj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zafpyfje.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jupthnnx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ctpjkppe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cpnpawhj.html

[B07] while 循环
来源：http://www.sxryk.cn/163flyltgmk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163micjgwmb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tpjlzcff.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mxcjaqsr.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vigqxsjd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ceepakmm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hfzqywbw.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gnknrjhk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163meefpmrl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rcbpscng.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163obrmjrgi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163opkoeaeh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163epnbdmop.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ffkzscko.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zesreafj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163eyuxcjbc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163llwodgnl.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163enecdimx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163akqsnofw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163dkgzpobb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163sdddylei.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nuvftnht.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hbydgljs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fmafxlfv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yzavxzjm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xaxeiahi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bmifehns.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yuicbnjb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rvzjsiiq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qrtccvkr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163skfahoql.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163plyyxhph.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163iqwufrsm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rcbbmlru.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ixlguwwy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uuwoylus.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163plqacwiu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dhcvwhvd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wtuwvvzv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qtrglyxa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zozczdac.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163caoowkdf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163uqrjqxad.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ewhhwwno.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gotjocsb.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ucskozqx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163skhdsodi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yyyptaeo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yhmixfub.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nfnitjdc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gbhetpae.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163awgplnsw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163znlivhki.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rddjnavl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hktuxeoc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163sgxruiaj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163raohzhir.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163goyaugsu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rexnqudc.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dkudeqjv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cjfdpzki.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wvguatyw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zgdtsigo.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163umegnlul.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163aqpmmrns.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163smzzdara.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163omvomotv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163znhkvizr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gejqpskx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sqsbeyap.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zbqqcack.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163epzzrosx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vavqnhgn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mkxfsyhx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lkhpnykf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ocvagezf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kpvogxxd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cxgzesju.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163cswxjcbi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kyrnghzx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jmjmuoly.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hlfmnvhw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hzjllvnz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163epkhwgnc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163esafmxxe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xaahuwhk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163skgsoovu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hngyfzpg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dnunwjfz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163heuhtddd.html

================================================================================
来源：http://www.aibaodan.cn/163kdoxuluy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163athfcchr.html

================================================================================
来源：http://www.sxryk.cn/163fejrwcou.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xmcegtmv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zxsqteyo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pqtilkaz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jqxevync.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fglbzyok.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163whznvvlq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bucselvz.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jwzhuvvh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ohmqyapd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163kkpfxwae.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163luaozvub.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163tzcwiubq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nvnvvzvi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163llbvnbdl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vyzyxwhp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163orivvjer.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hgcspnbt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jmedlpwt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hohwlpqw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163bqejtsgg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163olgdyhah.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163olttzoct.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163alqrnrpf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kwicbhsm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nvovtsvt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pizbklfj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vykqwgsy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pqjeetsw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163atcpoqqi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ztreobhz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xufmcauu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fbhhdohc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kvuffjmk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163byccwsun.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kxedepyw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ovcfqejm.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uauhzzei.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nxgfnncp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dbeziuhe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xzolitpz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ixnmlayc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163prvqcfng.html

Go:   return a, b
来源：http://www.sxryk.cn/163xanzbdbj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hagwosfn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163upshkvvf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163yzmvdzae.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kvzabsad.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xqbsbvhe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hicblilo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kemktfmc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hjayzcqd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mfmjefok.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ftjbcbli.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yjolhkxu.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163isktayxa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ywmcmbue.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lxhemmgn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wnwwtsxu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pyllvadc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xvmybhpw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pgccxbpx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163hstccijb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163idhdbxqs.html

[C08] 闭包
来源：http://www.sxryk.cn/163nzsxgegw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163tujsafdd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ciibvpzp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dtrzqnjv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oqznoxjx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ndwupapo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163talmdkql.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bubbpkwq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lufofbsn.html

[C09] 递归
来源：http://www.sxryk.cn/163mbeebxmt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hnakflen.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uucqlcjn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pwcdebhz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ewsaesgh.html


<!-- 参考信息 -->