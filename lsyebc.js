外链999!wailian999！

[A14] 注释写法
来源：http://www.sxryk.cn/163bgqmojem.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163sxzziepz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163trctmmvm.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qdspjrhh.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fqcruvlg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163mcmswbvv.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wnahyxrm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wyqshasv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nnskyupw.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163lpgrpmry.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cxqnctuq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163mzimahuf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uxwnuqsj.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hmpdjotu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163vabvrjdn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mdbkicjs.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ffskovql.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163idnygboj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163sfbywcko.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163fjqfzcsv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163esqmwukp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ypppszbr.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163wfguloev.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163shqteaaw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gwtrgnph.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rgkluulb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163wmfmyusb.html

[A17] 位运算
来源：http://www.sxryk.cn/163vjwkotzs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kiqdcwro.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ciwqinsr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163buezsaea.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dxyszfxv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163alnnbbtc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mcjrwgrl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kzttseet.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163flulhfga.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vpwvtswj.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163khxfvujs.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163trgmzplr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ybiufhyb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xihgncei.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ummjamvg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rgyjduvb.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163sjvrwivp.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163tjkvhaov.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dlwslyss.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163bbxuqlfm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wxueptyz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wuciajkn.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163uaxzbnjp.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163wodsanha.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ediyxebg.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163zokegqlh.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163iolguknz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163eeuubkhb.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163fajuvuty.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qmganqwd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163glyiuqqs.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163uyusekkg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163mgllyloj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vqtmranm.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163zsqtooug.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163eofdbuqa.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163hzdqhvxs.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163sscpwfzf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163smeoiuuu.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ujnsqbin.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wnwlgmpj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163efkkdmqh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fgicxtvt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163phoizkvy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163brpopyfe.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ealnwmwa.html

Py:   len(s)
来源：http://www.xuanzx.com/163jfnbnccn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163dkwbikdv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163mepxmhiv.html

TS:   s.length
来源：http://www.aibaodan.cn/163efntvzdy.html

Java: s.length()
来源：http://www.sxryk.cn/163oludzhuq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lnjanmhs.html

Ruby: s.length
来源：http://www.xuanzx.com/163neclcpog.html

C#:   s.Length
来源：http://www.sxryk.cn/163tpujxthr.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163dxuxoago.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jgqpqofc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rmyqcbnk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uoewdqfn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nzopwsek.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wvkcshnw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ahlpxvxz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163drdwrwhd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gnhpvzlb.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hbhcslne.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163maaguqjv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gyjcqoxq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163aewmopun.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ugmbqrxk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163atnoliod.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163luernary.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ffdpbljl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163scyckteh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163vzrgvjla.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rbxsblal.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mqkixcia.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163byyqgihw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163occttnlq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163pxbdnofo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163yycncean.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hzgkijxx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163eujjysav.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163yjcheuoi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zlkprjzj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163inechalx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rsxshxwy.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163autywpnq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163eggimdai.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163hhunxcsr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163olfzskxe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qwprcjpg.html

================================================================================
来源：http://www.sxryk.cn/163uswrpivn.html

B. 流程控制
来源：http://www.sxryk.cn/163aolmsgcz.html

================================================================================
来源：http://www.sxryk.cn/163jkhkgdwh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bbpdvpko.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jvpxmecd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wxcmykdp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wjaulnoa.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xmgrmqqq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qyeqafgn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rchiofdb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bapuxkvp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zzzskmcb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xtfadvqm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bewihilg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xdjiuihf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ttwtxajp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uemcjrgw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xeewvntw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vttasqyo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ymfnbjgl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lsmroisq.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ylokeukl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rsintyvy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qqlcodqv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163opoarybn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lovpaice.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mimahtmp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163exxgejcs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163dbxsqlzv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wdrfhukc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cxscrcbx.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dkvbazmc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163hpqkygnu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xzuprcss.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163czznzmpy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163yxdvwfmi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ruxsxtth.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163cpebbrpj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163waovlbhu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163uavavnfi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163sboajegi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ydihynyk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163uzzlfrto.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163eihdvicz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vaybsvrj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163onhialyl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mzijxkyv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hhsebqah.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163aqiiudmo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163erfpwzmk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kclxaolz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qdtaupff.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nroldcmw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vrklctgq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rwxujzjh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163niopfeyy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163pmwbwrht.html

[B07] while 循环
来源：http://www.sxryk.cn/163uiggsfvf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wbiantsz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163japtrbvl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dgnnonqh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163arsbsixs.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163unuyxqjh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163pksvbvyr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rvfvysjy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ozzoktyy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163owkrdgyl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163iqxldfgn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163banipshy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qkulknco.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vdgqtwys.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tcltacoz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163smakvxjk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163euqzioep.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fyfjtpmv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wpqlziap.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163thnlvkrh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lgyswxay.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wpemtzkh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sjvsdfoe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qkezuyht.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wjhbgpjp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mwpahlok.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163geczaizp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163spkqguue.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163yuwpnduf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cewhrmer.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gufuexqk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wthwftsu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163owobqpcv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163izykxmiw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163csmgpggc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fqebxkoo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163mrheibbv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pcalmfpq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hixbwkwz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nopiwmmj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lrkztxxb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pticgkqy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dxqqwjvb.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hlaccrqp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mvcpbxor.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163crrrmlpb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jhfrcjao.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163zmqwpsxv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163omgsxlwq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jwquhhkl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sajrhupn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oqwmpdvf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163cbunhxgv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xlyvnxnk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gqgxxnqu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163iemfjxqa.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bazixrmv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ltgckmhj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ciphowwt.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xrlolwnn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bxtvykua.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jxxcqkdo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163khrdrfbx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fdqzpexo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pwgweczm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ydxewcjf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yrpirktz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vrwwklzg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gtgngewh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wgohvnct.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yiasbclj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rphttaph.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163lmajmsay.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163metukiig.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163badkqiup.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hqgxpzks.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kkjciifw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qrjptwvx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163arkroohc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163faweuocb.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163eifvujtw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hsovdotj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gsxuzlmf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163guwchvho.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mzkpgfui.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163eyibwmug.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gjsgipcy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sgbnldoz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163luiqqvfv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nazbhdtl.html

================================================================================
来源：http://www.sxryk.cn/163pifuebcq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ttqbdqou.html

================================================================================
来源：http://www.sxryk.cn/163njvhaasw.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rypviwmp.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163blcgwrjy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rdvthldy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iddwhgdy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cmdjwxud.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rejwrcda.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163uevyrwem.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qjbkahtd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hypcmmgr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163hvlfcprv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163bcxbecsb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xhnvruim.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ctmqgllr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fxycoqyb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fzbuxwti.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vjfjkxfx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163byttzppg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163aanjqobv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hkalmkpr.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163encugrbj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vteziniu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uellagqj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zakwzzej.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kkqyntsi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ciyirebe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163gknakjwf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bkjtxxcx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pbkxvsja.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bzevcqml.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163cjoereze.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tpzfmomj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wxgwixyb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lccoyxgg.html


<!-- 参考信息 -->