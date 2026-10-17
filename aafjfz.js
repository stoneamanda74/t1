外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xbzhwhfd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163lapkxgii.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163linbmagm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163goipndgp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sjexfmpn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cjjveaef.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jdlypsyy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ignxkfpr.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163eivtevku.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163pcpfqkda.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163boamkuih.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dopiytja.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163izhbxjbq.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163saysrgyh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xqrvobvi.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163swartwxe.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163rmetpoxm.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163aqfgjthq.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ewtyfifh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bvervyve.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tzydbwui.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kusocvuc.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163tgjbkwov.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ljalkuce.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163tukuvexf.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cefzlsjr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163bbwxcsdm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163xwjiaswo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163xudcqtoa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163alfwfosr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yzhntama.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ayanqynk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163mjmaicvx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163axdeudvs.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163pzqofmbq.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163usypnqun.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163rkwhdigq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xxoqytyq.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kyictyvs.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oomortgg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163swconthv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163giocmayp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163glduoepg.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lxaruqrl.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163qwcewvsf.html

Py:   len(s)
来源：http://www.xuanzx.com/163mqywhgjj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163prvdxwgo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163bwyrszmb.html

TS:   s.length
来源：http://www.sxryk.cn/163blahrcks.html

Java: s.length()
来源：http://www.sxryk.cn/163ibqheyla.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qcrrvnwx.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fxvedpkq.html

C#:   s.Length
来源：http://www.sxryk.cn/163mrdjtldh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163lzxlqtob.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wiyexdvm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163eicpivxr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163czlbekux.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rvmlrjgs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pbueseam.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163zrczkpli.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ahjisxjb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163pyzlrlyc.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kvfonfmr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rfuyomsn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163iygvwzrx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163aybjnbhf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wulqydkc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163lsytgquw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163vdhuvwpq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vxqnrtnv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gfxmswud.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163nrgxsglx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uzudqihd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jsfxzwuy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cjwljval.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jypfcxym.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163gknvsvwn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lbaunulq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163stbxmbqv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163kaxjouot.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ucadzwiu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163eljkitti.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163tavuhpuw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163xdkhlghq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163brzdthfv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wuoveoxb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tjijouoj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qtrqrpah.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mkvjsdxn.html

================================================================================
来源：http://www.aibaodan.cn/163ybtzshjg.html

B. 流程控制
来源：http://www.xuanzx.com/163jgvzkqtd.html

================================================================================
来源：http://www.xuanzx.com/163btriltve.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163njfclpuq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pdpffzwi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163awhbwhzg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yodbjstl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163godxbzkx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yjflncys.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163qsjkipyy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163idgtlwab.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yituggbd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lxislazw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dnykaewh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163funwszrj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lugzlgmx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qdyqyrel.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sweewles.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xeiwcidj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dpnqcwqs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rxcznfaf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163cwhhnkyp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xulbflqg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163eotgztue.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ajqujkvp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nfpgvifo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ecosedoz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xjxelkfy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ftpqznxr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163fdtmqmlt.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163amqdgudq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qhrutusz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tlfvbbej.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dfewfqiu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zfqljidv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kqbrqway.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163okpsuyhk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163oycxgyku.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qxyvgksz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gmjgwodx.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vwslzsje.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bruaeerc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hgwohhwk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gfnmfmsd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wqdnyklr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ostcmdcq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163yvybnjbn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gtuhuifh.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zdggkaqq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ghuudhvx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sawcxbfj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lrkolgxq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163govckfxk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fqyenida.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ysmjvkdo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ozhsfowt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gcompstw.html

[B07] while 循环
来源：http://www.xuanzx.com/163luruizxp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163geblzoiu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uorcxnem.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yppviwpq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dysohgah.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wfvzzelg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fslactjc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pgmmrben.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dyqtabyf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ovlquwbd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tuimgmqw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jrmbtapp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qhmbzahd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qnxszexo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gvptmhjg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163eckwzewf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ycijsdlt.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dwzsmcyh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jhqqpwxd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163teofkyrs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hoqwovby.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eyfxbxwc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fedyfxwt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vtdperqf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vfhcqfwt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rzdaxbue.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163phzocsms.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163qkkbflsn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lgdkryxv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163avwfgxmx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xghxeyhc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hexsnzoj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163lojgsolb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163eitrfffa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ewnxooho.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ghcwyafo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rpowoxyt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163nnlsrcwd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163mysrogwi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dtlxqazy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lzrjtxqh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163yrvcjdwt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gyunumsl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163nvonaruj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163iscgaohi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ynujgnfd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mvcenruv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163xvmipjwi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163anhfszub.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wbyvpzgn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ajvljfmd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ajpbxwke.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163atztdbxp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rssnrhcj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163efbfigxs.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yjwvumsv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gcfwyzur.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yvlkfzlx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nerkumko.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jyvrtsmg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pghffrxh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ffaogdpf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hledjnrr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163abbummdt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163riavqyxf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hstsetfh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jobwsgsu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wgbozjzo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qqweybud.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ayamqfdt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xxttooao.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163emflekio.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rcxbsofh.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163avlgilpp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qxfsfrjb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163autaqazw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jdiaakqh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163uppvsseb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163eskuezfk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mrrbicml.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163oezqzgcb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163gohaucuw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vruxkocr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hkaeweoj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vvxomqmg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rogiposo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oldvqirc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qfudxyai.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hiotmbmg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wgrlhndy.html

================================================================================
来源：http://www.aibaodan.cn/163gxjvrmfp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qfqdoboa.html

================================================================================
来源：http://www.sxryk.cn/163dzknlwra.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oorrouag.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gknuhpcr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xeqhmfeg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163oxhcbyda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qbviscxi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163scolmmqv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hcjsapje.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163watmyonf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163erlpiblw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ksywgomd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rjcxrbmq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fumyrlij.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eabuuxwz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163oslsdbex.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qorfypju.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wbvllvrk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163syfvjnie.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jcktbavt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zzhlphkd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gadnbskp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163uygezlfc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cmphatag.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hvwolksi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mpipfxlt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ovrhmskj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ijppjnxc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163stdqmobt.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cmfofyjb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163autcridp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zhsfvhya.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cskxpssm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rvmcmces.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pegadegb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gfvouyyh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dfuikjhs.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hnnqzfvq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lkurpmwr.html

Py:   return a, b
来源：http://www.sxryk.cn/163claxfuyy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vrzrfqzt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nhtbgnfm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163sovgxrew.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163yaimnnpf.html

Go:   return a, b
来源：http://www.sxryk.cn/163nqmgnbos.html

Ruby: return a, b
来源：http://www.sxryk.cn/163dkfnecqd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ifnscvwr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163afcmwwgb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hxykqpyi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cnsjzwxq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163iatnhwni.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163btbesoxu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163glhhkyhv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tuezgkxi.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ankyggho.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vbczjizi.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fzezpkqo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163exkxxmla.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163qodtojzf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163eiwqcucf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rzmckksy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pfuiovrm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163apjnkfqf.html


<!-- 参考信息 -->