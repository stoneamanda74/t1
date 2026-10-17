外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oykzzsel.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wattirjb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hsqdxavt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tizomzhb.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ykqbobbc.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yvgrhrko.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163drpumwjh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fladroap.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163csrjgkxb.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163rdsjihqh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163pgufwzcb.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163wwqjsmwb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jkfzlkly.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ezrxrspd.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163iwbvyiqn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bsorssyo.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lquombwk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163cxjkvuwp.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163sblsszul.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163jrtmkaof.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ekrthtte.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ginznppm.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ibttzkev.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163kvcuhmqx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163yyyuueoy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163jvqirxhq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163vlnrbbrw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163tgttfbry.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ucdbdwxn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163xicxdbfi.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163qfnxaswf.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163qqeowhoi.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ffzexbkr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163haksyddj.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sttxagyc.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163apteiqhq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qxdfilhf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ltfciahx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163osbpnhcu.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163sfdottim.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rxefigrh.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jpupxunb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163cbycergj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ofdvdvco.html

TS:   s.length
来源：http://www.xuanzx.com/163qihwagbw.html

Java: s.length()
来源：http://www.aibaodan.cn/163zaeehbgp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163cofungqk.html

Ruby: s.length
来源：http://www.xuanzx.com/163qfuramcl.html

C#:   s.Length
来源：http://www.xuanzx.com/163dxqcgumn.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wgkhaevc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ddmvamon.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zxsmagwk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ujbqmecf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mrgyveka.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tptxlfmo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163urmbxmig.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163nivucfts.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ahogujay.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kfcmznlp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ldljwvqm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mgrkrytp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fqwlxgsl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163aueqbhys.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163uriaudqx.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hrldgban.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dvdpxfkr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163huxmhouy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163pfytehhq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ngcpqqrn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163jeyfbohi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sjnhpigh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163birjgdrv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kebmltfa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nusowkuz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dswajpjy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nvuyfknq.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fbcqjhvt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xkhcppju.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163mwzvynby.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nidvronn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vgsfpcnk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163itfqagkb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163bdzaqdff.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gnlienme.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hpsoptob.html

================================================================================
来源：http://www.sxryk.cn/163gcknmxnh.html

B. 流程控制
来源：http://www.sxryk.cn/163ariwbtls.html

================================================================================
来源：http://www.sxryk.cn/163dsnudnmo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163pmgewkjy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163aldwvrkx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lranpizc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vtkyuhlh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rpgbychy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qyctihcw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vowefznl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rvwalque.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iiwovbim.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163piizlqvj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163fqilssvl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tvmjwkks.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163iljcyyxo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wzjhkpfq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zfqykyhy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fumktlvn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nejwlczn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163csapzaqx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163oedlzwaw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ifkebjdj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163aviaofgm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bhegdowo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zqkspmpk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xsiimhks.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163tvplxcpw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xvipvwda.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gxgqvxlx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163gjisjrfv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163efnwqwyd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qoczjbfd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163sjcvcgxu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163acnvtjnj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ucqdjgzs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163slvmzbyl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dtqeuzfc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163blwdbpoe.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163rsqqgval.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dkebnsho.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jtcsuiub.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bisopxfq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163myrkwczs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hiczkpyu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fwqmssxk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jwtgfnlg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163oxuvbxtp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nxqhozjq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rndwdcvl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qhyablmf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163isrfdxvl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lxqsxttu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gswqhjrh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ijoxnjdy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163tmsqucws.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vtxtcjxb.html

[B07] while 循环
来源：http://www.sxryk.cn/163vpyrbujd.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nfnmypbm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ioivkswe.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gebepasz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nfexcxwb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zazmuzlh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gxmkckyr.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163mplszscz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dyjdombf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wpkjbska.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163aipdsesg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wkktntyi.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ecpgzwuc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163khsggtlh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lksqkhfq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ajelexzr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xvubhuup.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jgsazfeg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jhriwwda.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nryyhjjx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163bbohjdoj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wrhoqyim.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lelmcxfk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jkxtqkqz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gemmzinf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ihjbmdms.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lrvnqmjc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bkwlgawo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163krcmsfkb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163amkmptvj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163voqcaouw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rcxqafaa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163afvnoqws.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ouplswbt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163wmzhbedo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163emjkgkoa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ljdykpdf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ujghvxdy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xawbekrg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mftyldua.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lzkdacop.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hhebzusb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ccpiwhlp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qihzircc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163owhqfvrk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cqccznvw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163udsclxaz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ahkdtxmn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lyiiaspy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gcvhlqhl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gtutoevw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zgjuukih.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163htqeceyr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oiqkcuua.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163raobbnfg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cfgmcnxt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163sdaykdfz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rieeramz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163srmogwsb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163sgqietmp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dzhhgleb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qfcrtogs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vahzlpjw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ybtiylek.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jkzulxpp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163nwpmswxh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yfvmimet.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fzzislae.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163konoadfe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163quisawyg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qqkcknht.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163urcpdfjs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163uoamfszq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ptmjfabu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jrbgbwsf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nhzmhnjq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lodyznpy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163flovzoat.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163pemnkjru.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dnuyfkht.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163mdjeamoy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wesxvcpp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163irmxrlay.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163sdkwrnye.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sdbcqayf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163uwdugeph.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ibqjyzkr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163btnkrqbb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iavcrmld.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ftjfmbvp.html

================================================================================
来源：http://www.sxryk.cn/163ssvnvsok.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163khgrzrrj.html

================================================================================
来源：http://www.xuanzx.com/163vrzilrch.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aivjmlol.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163akzdrenl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zdtmxvgj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xbmyrvya.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163beadzeiq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hvbxgwwx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ztmgjufx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dabcerxk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oxefsait.html

[C02] 默认参数
来源：http://www.sxryk.cn/163eidjvhgg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bsrqvxuo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vkgfuvzk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pfaqdisv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jtpisbvp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nwbydbjp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jvgarwgq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rzgrgbgv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vnlqkqij.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mokjwgil.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rfhijvtx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nziarlft.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rvydsdrd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yeagbrnm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bayisccf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xkvaokmn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163sfyxoukw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zxjzybsf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mjvowcva.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163orixnuvt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iniwzwaq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zhyoyswf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lsvtapnw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ctsxzepz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qgntbtjh.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gwniptqn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ljixxoak.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ittioopt.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dwzqvczo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rumvsqym.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163smpotwsu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fmvurtax.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bvdxlerl.html

Go:   return a, b
来源：http://www.xuanzx.com/163lfobnlze.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mpdutgbx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mrivnllw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163pmdcifrl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163eciahcir.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163txkhzzxo.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163plncyems.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nskchsup.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yftikcxs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dgghphrx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fkwsmmty.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vwkamzfx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163eylfpqmo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163phbxhdcs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ibmvumwf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vcwuhgqi.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163skxemhep.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163orqbmirj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jvqdfzun.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163iowbhhys.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ujjrapsu.html

[C08] 闭包
来源：http://www.sxryk.cn/163hhwvskqy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bcsdycrm.html


<!-- 参考信息 -->