外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163uwmhloci.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gtembxjj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wwlrlsjq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163mgimyemm.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mcdkdncz.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163afsadsep.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xxrwianu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163sjnolxoe.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ivfkltwz.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163oiqiqfif.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163mrhyzxym.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bpcstzgy.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163dolgdkpn.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ujpqmkgq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ryloqwyh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ibueveae.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163adhgygxy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yjupkukm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hbdtqift.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163pnkljgyi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hxicdvqk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zlyagynk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163adnkfsry.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163gifoogjn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163flhwkpmg.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mykchokh.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163awwtmonr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163pihdrsgp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zhknaaep.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ykcbwtmk.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hbtgssyn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dbccssll.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wtxnyshu.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163hspvurzn.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kbgbeoci.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hnydrsch.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163cyxofqzk.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163outfsxjr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xocpsbat.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163latqeksm.html

[A14] 注释写法
来源：http://www.sxryk.cn/163mcsmvsfr.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163rvjysvyw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163brxciqqu.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jlbossxh.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wvveawud.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ytifkpxw.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qzeyuesi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163rwoeasfz.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163buackoog.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qohapwps.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163yhqkmebg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163urehpqcm.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zduebjyt.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hsahjbom.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163djcsduve.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163czfpvpmi.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wtxtmzbx.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ebapdjsc.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163vypcumgh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fwmxevwv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zewepvau.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163aiwoavks.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163gaudhfwi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163twbkdlsz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163roterqbf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163xrbcuobj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163uqwndsvu.html

[A17] 位运算
来源：http://www.aibaodan.cn/163eneurokz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163geskhwnq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nxwfigsn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163djnikyjz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163fkxhhjqy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163msdaokzz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nbyigsye.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163twtbsgbk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oewovxpi.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163whvjxsli.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bglgqyib.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163bytmxsaz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163cygusqpd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xbnqnezj.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dpdmpzje.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ggztiags.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163mjowakzz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163legfsfne.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163bwkyowdw.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163spavhcwn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163swtzmcvx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163wzkyztgd.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ubjylesw.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ndmgynnt.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ylsuqigk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163igifezxv.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qrzlvddc.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fdawhfct.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hnzfpamk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ejeztjqy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163lohoaahu.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163hpdpjdze.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163witjonnl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163iqhasufw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163dvzjuwxv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163fkfhqlrw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bzawpgja.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163goyiknlf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163icsnwcyg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163loxtndik.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163surkxggt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bnxmebgz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qefehtoj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bbkdvvcy.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163levivdvy.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163bmounftv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163kgujhvao.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163uoaipufa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wexjgiif.html

TS:   s.length
来源：http://www.xuanzx.com/163gmxeqifo.html

Java: s.length()
来源：http://www.sxryk.cn/163gyqmeqch.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163owulzhuo.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bupsahle.html

C#:   s.Length
来源：http://www.sxryk.cn/163rgymkgdc.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wymtwbyz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ckgvimvc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163lzvbesoh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lstxqstt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ipmutsfw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dyeadtar.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163apcgicfy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wyrcibja.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ncrxlpkw.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qmzsxugh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163lpiihwmo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163rfoctxgl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163krqfphem.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qtxkqjzf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dimpwdze.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163djbkidlk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163noijcbus.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xiwurizg.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163audnsvyn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zdyyrbeg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vilkziwa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rutzqaon.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163oixjzrsk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ohjkjhtt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vuuqnolo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163yutennou.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163liwmfqbd.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163noaiqrsh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163rnldxfah.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pblzunfh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tioumcxx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163angenbhm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cptqovxa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jcicuyvf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163xtevacqm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mxpmgkoh.html

================================================================================
来源：http://www.xuanzx.com/163vtyxbiwk.html

B. 流程控制
来源：http://www.sxryk.cn/163kdoqoeff.html

================================================================================
来源：http://www.xuanzx.com/163ymuyrify.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wvpiehng.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qnyvurez.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qsriedvr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yffrftuw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ntmamstb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gidnsvto.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mxjcowjj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163razzmghn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163atwwgzjv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163umpzocwq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lfbfyubl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xjehpxoj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gxvkrjad.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hfacrbxx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nodnrcac.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163rrwuoqhq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163mulzsrpt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wpswdrkr.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ctdhfdll.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rysulgnx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163sldznsqc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yyskqymt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163sxgnrjjy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163foqqlitp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163cywwwhwe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ekxjtntp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xmvlbnok.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ezyohmqe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163pbhfaowf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tbectamx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ehadamuu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nbxpqtzl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jrtjnhqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163axyyacti.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163avxxaihm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nsyatjhf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zsejqoji.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rcxgzvws.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163evbtsgpa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163eciwtkxl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rwtjsiwc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163nyqxkudt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ylmboxql.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ysqzexre.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163iobvcewd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ltmkhafw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163wmczjxvh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ofxcphbf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ekijzhcu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gvmjilfq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163leggvrmy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cexatwwx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ihrdpkfr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tdqcqbmi.html

[B07] while 循环
来源：http://www.xuanzx.com/163wttqwdxv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hpuhkegy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pjtmlsnf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163itsgjlup.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163muqwykla.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xtdmefel.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163sntsorbm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qhjjzdlc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bqgokyzx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ysdtejud.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qpaszrpt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gmixwaqh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ajiozqtp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rqmrpiui.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oupoupsh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mbbdrmfp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163teuwqnsh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aofcdxza.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ipkcbyqg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163balpnsny.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163isbrzgof.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dcwqvrlq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gdzzppvf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ohorivns.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ctuaupdl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163eylepmjj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jjxztacs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yofmvzlx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hmiruloy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cgbbsmai.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163thwwuhpm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ihrxskrf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163linmtcbw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ovgdktuf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ysfnkahp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ezhqzoxr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nzdyfywl.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163inrgdoww.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163uodokocn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pjngpafm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163awkqbmyk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163irlfsjbi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163jnbaroqh.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gcafknxf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163admhuwup.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bqyogrqm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lhdgerbr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163luukwxlm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oyhgzlla.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hkxinhkk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kxjaossj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163zryqqwxj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163cfygycad.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163avdumshk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dtfcuwse.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163scsxqbhd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163roxguyyl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dbtgmvgj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lgebvckf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wonyrcdt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qjxksiiy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hgxwlbiq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rbnghvwe.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dxkgpmuw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163heiofobm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ubqfejif.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163psotnkwc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oysipvzs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wtjljewu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163grlehrdl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ebmdvocs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qxuimiet.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bzejlhuw.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hpwprucx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bdjndxgs.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qogmhgiv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163phvavzfv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163trbvbbrq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163egjauvyz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fgirzcqq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cgwbbwvr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xsgijklm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ixgkfwcd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163beqorsia.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ftxbdokr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163lcguhilw.html


<!-- 参考信息 -->