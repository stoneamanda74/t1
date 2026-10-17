外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zbuvikog.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rhzzjbvs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163bdexwzls.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163odjwiadt.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163xeamqkha.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163jmgckths.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vjyfdnfr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163svzytpko.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tmcgdjwc.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163glothfzx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163willxawm.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163cpomgssa.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163jqzkjlig.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163meviyqwc.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rjjmwzye.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163fhcjxxen.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pxvhhfmd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163gbgqfmyb.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163njordygp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163wgegddwk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ehhkqgwu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163fvwlzaui.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ytbovmzm.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163gjvqksds.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pzvlfbnq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hbukswkp.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ahgcooew.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kpnmlhxl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mxtqtvcf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bltfqebc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mtkarqif.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163iqccwxmn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163wofmieuy.html

Py:   len(s)
来源：http://www.sxryk.cn/163iqrmjvhi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ywymgyvi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163wouufzwy.html

TS:   s.length
来源：http://www.sxryk.cn/163puknjwmw.html

Java: s.length()
来源：http://www.sxryk.cn/163stvtfjve.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ujppkkhj.html

Ruby: s.length
来源：http://www.xuanzx.com/163dqmggwsj.html

C#:   s.Length
来源：http://www.aibaodan.cn/163xegewhxc.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163nwbfeteb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sdkbldhh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xmiawplq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uakoswhs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rhabienz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ypbjsphi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163vjfmimqc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ztlkglse.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163pniuhnbw.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dtufbkbp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163wpttwysj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163nclnyvhm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tvthzveo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qtzghlqg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163fkuevvdj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ackppgpk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163lxebuwbx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163bxwalwix.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163kdpjynkk.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163cnsbbjps.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ztekbjft.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gdgdgyrh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ssdzgkyh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163pzsdrhcz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163kngpmwiy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163isibvsoe.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ffeqmpvr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kfvaqxxf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gxhebmjj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hthtkbbr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163sjawaepq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ejqofatl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ujywjiwa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jqfworbn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163irtulejz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163wnjqnsnw.html

================================================================================
来源：http://www.sxryk.cn/163flgtytyz.html

B. 流程控制
来源：http://www.sxryk.cn/163epgkqfym.html

================================================================================
来源：http://www.aibaodan.cn/163jpwzjbti.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vzdiwcpa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jmenogfp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jbrlrdcz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ixdpjuuf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zrbdmjhm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ylpkdiri.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rsjqxsoq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jlxxazrv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163buypoxmh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hcfhnnom.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yncknesx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xieydmub.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rzkuqdft.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163otipjcfi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mzeslyok.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163cqnlfqgy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163xycdjxkb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bcipjprw.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163cuwlggqg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jcjhkccj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lbhawszn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163onndoozy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fdyjhtkw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ovypxqss.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kdypolzp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bmzrpucm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163atsmlurb.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163owddfiqh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gmnjuueh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qdobunia.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qjsoitah.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bigvfunj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xjsxujpa.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163zljaybtl.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163pbnhfnak.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163erjmubsu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163byygqwpu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163gmjfvtre.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zmtldaml.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ckxmfepw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163exsrrsor.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163olkehnvl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163djajofsj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qwqfiers.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ebvwgzpk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qrqnppto.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lksncatx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163oermwpmg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xwdowotl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mzzjjbcs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zujdsyas.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zirleocu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fetwkjpi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mliaxzlw.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qmbbjsjy.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163nsnsmdoa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hwrosevi.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rflqzvmc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163axrzfpbt.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jxqchlyk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163eigffdtf.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jrszqent.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fnhhhwoh.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163brcpskjo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wbeqyobm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fimljrlv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ykeatwpd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163owbhftzt.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gbmuipwk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163gxsaxodj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mdlmvipk.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bguyvano.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163smpnjacg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mvkpzoza.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163khqbljsh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pytpcfyg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163caovacwc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hltciajq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ogfgvhme.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163pehrizwg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163itiobfov.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163aamfqsnr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fdgbgudv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163khgmhfsp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ruhnuhmo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ndfbdafx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mgplbjec.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zjctqpfi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bweznyti.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gpoxulsc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163lioutjjv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163belhoedl.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jmplyfrb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hjtrqmur.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fkjuhvoc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kecyjgji.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zccjnugs.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jkwbbbjw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mibwbrpc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163imojdznj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lfzpeuod.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jnlvmnjr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bahrpfeg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jwuvsusj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163orbagdqo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163juafzckb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qunpzvlx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163eajkrizk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163edfwwosn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163trqjdhab.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vzddfapi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wvuebkda.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163aajytvyz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163uvcphjlp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nkezywdb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cviedbtw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hafrjggj.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ideyqxod.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cplxrlur.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yuocxtbk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163diwperzq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vqwqbkkr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cnywpvno.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163oenvxzaq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vxlfyshd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163oqtivinx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163okmwwrjg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xnxskovn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qgzwblaj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ppjvwitm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zhuwwcdg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ctskfixe.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163xsmztggl.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yhkdjfvb.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yarulcfb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ggajrbgi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ifaraxey.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zmuuuqra.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pkikfyth.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ucrhyomc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qjttkcsx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pyypqnqg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163btwnlyvp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jucnuqwr.html

================================================================================
来源：http://www.xuanzx.com/163ulqfwmbb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dnbhmslo.html

================================================================================
来源：http://www.xuanzx.com/163njwkwbwy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dpoqsmie.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bwcpgtgr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yccqivsu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163yercajbu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bzjynqul.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hpmfruwb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qzicefxe.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xjqijwcj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uncelwbs.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dccphzjt.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163gqzydalt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jfmoexku.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tnoagrup.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rqvhpndb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163clrbqwzj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163usmqrlfl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163isufesnu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163biwmsnvk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tvwjxura.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mdgfqlhp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rqtkzmti.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tktacvip.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163aybmyqdn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ksaxuzdq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rjtrujwv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zqhqccam.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163unxepues.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zednuxxf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163olgqdoii.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nplealvx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rujjluoi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fgedhhqe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ttoddvuv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xgqivwbr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xvablway.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zhvsannd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bbcnqjhj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ieaneslb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zfxqlqao.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rynetwyw.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163givpunif.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163enyrwodr.html

Go:   return a, b
来源：http://www.sxryk.cn/163bmzlsnwg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ullitfkm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ngsnhlqf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hbvogmuh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163eoorqlbd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bgvgtbee.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163oidiojgy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163btlwiysh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ghmpalcj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jjexonih.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pwphdmpf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ctbbtnjp.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ebeugjsy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qinypkbu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163felaqkut.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vybvhiaj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ybqlgosr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163nigvwraa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pchfmwae.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163szhzwvse.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lpygpfni.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yzlbxisy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zabbrfop.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163eyoiyxmi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163myfsoosd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tksfrmnv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163nbmftwof.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163echckooi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dgmpiicb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163glcrevss.html

[C09] 递归
来源：http://www.sxryk.cn/163ersjwfnn.html


<!-- 参考信息 -->