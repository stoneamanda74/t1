外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163joibtdiw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163plpwowsf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163whfgsjdr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163iiebjnpn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uyfpnwmk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163zgzkzjxu.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dtquwdwd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dssiuwvq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nxnlezke.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qdxboaga.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nxqqzxhw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163weyczdfw.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163oouuehbt.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vldkrrlx.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ttvbwsie.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ydfhhcmd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zpdlgedh.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163wplqqjrc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rbhxyxby.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163vsbwurrs.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163rsvoprgj.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163sbazezbm.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163dgfkgemx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163jnrtuici.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163scvvdhff.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xsuwzzjl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pzbvjsoc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ssneadoy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163yjwzgitk.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163xlaooykw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163gmnrdebk.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163birketfb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163urqxdxkc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163srktlutc.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ijzlecen.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163gpqdnkdh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163koptcxhc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ukjvdbas.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yiicxcso.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lziqifsa.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163rgiunvwe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wjrbtwrc.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sdyffejv.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dimdajjc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xdtegqwk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zckmbdil.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zhinvahb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163qcjkxkcm.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163vhporeri.html

Py:   len(s)
来源：http://www.sxryk.cn/163zpleszkt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163gkcxmqqn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wavabatw.html

TS:   s.length
来源：http://www.aibaodan.cn/163iyxdesla.html

Java: s.length()
来源：http://www.sxryk.cn/163yuhyzbos.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ulsgkzne.html

Ruby: s.length
来源：http://www.sxryk.cn/163cuxmuxto.html

C#:   s.Length
来源：http://www.xuanzx.com/163ugicdloa.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163sgwsneer.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ihhwfikc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163zseyqtht.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jjvjmfhq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jzlojnto.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kepkgnqt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163uuatujnw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wuyeowdz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163cnqnmzax.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ndhnnucy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yjgtvlkb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163efxhslyr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xmhdrxrq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163aoweqhvq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163yamauwbl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163clzknqmm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pkhlxlqj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ocikbstn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hzelwgbm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163fmqcdhov.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163trvtnxnk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163soytglhh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bidshabb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wrtxmbbk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163rxntjnvm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xocsorul.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163iuxzuvdx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163nqvlkckg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163yedyxaws.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163klmznkvc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nlaycqav.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163nljzmhtc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163mbvjpyza.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dsshcxyg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vkmmkxhy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163liojszyh.html

================================================================================
来源：http://www.sxryk.cn/163jmcrxdme.html

B. 流程控制
来源：http://www.sxryk.cn/163wckizoeo.html

================================================================================
来源：http://www.sxryk.cn/163drsyvbno.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163exouzqqz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jhxavcgk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163rynpbaqd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hzlpgomw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kugzcxwd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hgiomydk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163oyvbubow.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163glzoxizh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163feqetkof.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163lmbiuakr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163tkvbecoz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gzpjahkp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rvrudsbp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163muzjtypj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jsupjujy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mrzzbzmo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163aplpymus.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aefxkgqk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163slwrcpoe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wlpjotuo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ndyzisoc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ekwgdcwa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gnlhbmpu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163uypkzfrb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163guwslyka.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wbcbzjmn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pfikdhas.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163twlsmxww.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163wsjeervo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kswiaqfu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gjhuotlv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163smctzwpr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163geajnmzn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dqqfgrdw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zpelwnxh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163derstjwd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ojsluool.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163frxbbgjd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163agvsxeua.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ayqjabbz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pftdrjey.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fzgezrxp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163jzoapusm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fnpugwwz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lkqhzqae.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fkknklqd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163tzwvhiza.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pekzxaxy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uvqhbytt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ihuixxfo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zpufctrx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ttldtvug.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163srtygvic.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rdyctdjx.html

[B07] while 循环
来源：http://www.sxryk.cn/163nnnbjqrw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mqmaxbyu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yqmxxvba.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ekgkfsxp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qmtzxpcp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hbqwcljh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gceimlib.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zewznrbf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mcutgphf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yxhjnvzj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xxmqfrdo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163cjtkkdod.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163thpknesj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qksklpyj.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tcoklols.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hawzpetv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163twfmdquz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xzugqvpd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163emilikyb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zkytimge.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rrkvhkjr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jmwqvbiz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hvyvnzla.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yymksrgr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163psfymofe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lxlxnmla.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163caisvjtd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163knexxrbn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163auujzsht.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tetihgzp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163baixujzp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163lcxnbjow.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163idmlfrpw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wyioblso.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163uetspkud.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163eqzgukni.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tltllztp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rvavrjex.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163izgsiuld.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163frihhohk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163edkwkrhq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hahaolyw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gystotbv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wvgfjzdc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dkqfgtfb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163acgvsseq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vdhpwkvu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163sxjxgukx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163flhxjkpk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jyyxvlna.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wvgktvpa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bydgmdlp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mdqssyuy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dzfiwubp.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qppfcqes.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oqeqsgtw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vrgwwoxt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ekisomzy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nubgalvf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163abrulltb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163irelbolg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ctiobjnm.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163camzfjkg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rqgulgep.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163moruqfgd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163toqgmmbq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dhnnqusw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fkyqgrlv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ypmkdhcj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jkqxamah.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163eespyjib.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mdgodueb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qxdkiboj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163skjbduwn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uijlajsa.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fistigjw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ynaofrpr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cxoyozsv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wtnvdyhv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dvfxqkjo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163phnsdefc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eytsrowd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wgjnzuax.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ikebewmk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163brrshxwp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cdyhbgeq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rvfkyqej.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163eemkbmju.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bkwpwsjc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vvkbfmqp.html

================================================================================
来源：http://www.xuanzx.com/163nrthnqlk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xrqnknwz.html

================================================================================
来源：http://www.sxryk.cn/163rwljmgcl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gvcswrtc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ixnnvdit.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163majczzqz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163djjkemaz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nsrnhvkw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163igdjickl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zkvvfdlt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pxwwxfln.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jpulteof.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tdthbdqp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kjrhplro.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nqcbrvuu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163djxtvzts.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ifgywvyu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vsenxuxk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zudjmjfn.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nayzfmsx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uxwcpvti.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ssaerywz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sypqeawz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ihztwqdd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163iqducpqf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163myfncwwo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ytmbkzra.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vvlcaqsm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jufamuus.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rdnvqxwa.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163uewntcxm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163eqbnsbse.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163karnuaem.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ewklredw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163spilkmgt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zwrehbtu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163etgwshaz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fmgjpyxn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zqyynixd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bwaefjfj.html

Py:   return a, b
来源：http://www.xuanzx.com/163wbuuuoug.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jmvcgnnf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ikkmpzsa.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163awyckrfo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163olldblfx.html

Go:   return a, b
来源：http://www.sxryk.cn/163gvokhphj.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163epiyqaih.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vsahurvj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163dnbcdesl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cgmlxbpm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xtolqqqx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kubezgeu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zgelmrpq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ndoqicnp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rjxqqbwg.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163veccwafh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jrxynfzc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xawhagzd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wltncvzp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lvksdjju.html


<!-- 参考信息 -->